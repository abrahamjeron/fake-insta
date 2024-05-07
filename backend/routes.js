const express = require('express')
const User = require('./schema')
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post('/user_upload', async (req, res) => {
    const { userName, password } = req.body;
    
    try {
        const newUser = new User({ userName, password });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: "user not found" });
        }
        res.status(200).json({ message: "user deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;