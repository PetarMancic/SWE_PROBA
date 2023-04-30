import React,{useState} from "react";
import Slika from "../images/index1.png";
import './Register.css';


const Register = (props) => {
    return (
        <form className="login-form" >
        <img className="index" src={Slika}></img>
        <h1>Register to E-index</h1>
        <h2>Please enter your data</h2>

        <label htmlFor="index">Index</label>
        <input
            id="index"
            type="number"
        
            className="inpuT"
            
          
        />
        <label htmlFor="jmbg"> JMBG</label>
        <input
            id="jmbg"
            type="number"
            className="inpuT"
        />
        <label htmlFor="username"> Username</label>
        <input
            id="username"
            type="text"
            className="inpuT"
           
        />
        <label htmlFor="alternative"> Alternative E-mail</label>
        <input
            id="alternative"
            type="email"
            className="inpuT"
           
        />
        <label htmlFor="pwd"> Password</label>
        <input
            id="password"
            type="password"
            className="inpuT"
           
        />
        <label htmlFor="pwd"> Confirm your password</label>
        <input
            id="password"
            type="password"
            className="inpuT"
           
        />
        
        
        
        

        <button type="submit"> Register now</button>




    </form>

    )
}

export default Register;