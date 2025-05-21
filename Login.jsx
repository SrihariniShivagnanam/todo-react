import React, {useState} from 'react';
import {VscEye} from "react-icons/vsc";
import {TbEyeClosed} from "react-icons/tb";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { BiLogoFacebookCircle } from "react-icons/bi"; 
import { FaInstagram, FaLinkedin } from "react-icons/fa6";




function Login(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]=useState('');
    const [showPassword, setShowPassword]=useState(false);


    function handleLogin(e){
        e.preventDefault();
    }   

    function handleEmailChange(e){
        setEmail(e.target.value);               
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);

        const isvalidlength=password.length>=7;
        const isAlphanumeric=/^(a-z,A-Z,0-9)+$/.test(password);

        if(isvalidlength !== isAlphanumeric){
            setMessage("Password is invalid");                    
        }else{
            setMessage('');
        }

    }

    return (
        <div className="app-container">
            <form className="login-form" onSubmit={handleLogin}>
            <h1>Let's Connect and Explore</h1>
                <label>Mail</label>
                <div className="input-wrapper">
                    <MdEmail className="input-icon" />  
                    <input 
                    type="email" placeholder="Email Address" required value={email} onChange={handleEmailChange}
                    />
                </div>

                <label>Password</label>
                <div className="input-wrapper">
                    <RiLockPasswordFill className="input-icon" />
                    <input
                    type={showPassword ? "text" : "password"} placeholder="Password" required value={password} onChange={handlePasswordChange}
                    />
                    <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VscEye /> : <TbEyeClosed />}
                    </span>
                </div>

            <button type="submit">Login</button>

                <div className="social-icon">
                    <BiLogoFacebookCircle />
                    <FaInstagram />
                    <FaLinkedin />
                </div>

            </form>
        </div>
    );


}

export default Login;
