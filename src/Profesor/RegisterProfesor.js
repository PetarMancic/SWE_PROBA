import React, { useState } from "react";
import Slika from "../images/index1.png";
import '../Student/Register.css';
import axios from "../api/axios";
import Login from "../Login/Login";




const RegisterProfesor = (props) => {

    const [ime, setIme] = useState('');
    const [prezime, setprezime] = useState('');
    const [brojIndeksa, setbrojIndeksa] = useState(1);
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');


    const imeHandler = (event) => {
        setIme(event.target.value);
    }
    const prezimeHandler = (event) => {
        setprezime(event.target.value);
    }
    const brojIndeksaHandler = (event) => {
        setbrojIndeksa(event.target.value);
    }
    const userHandler = (event) => {
        setuser(event.target.value);
    }
    const passHandler = (event) => {
        setpass(event.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();

        const obj = {
            ime: ime,
            prezime: prezime,
            brojIndexa: parseInt(brojIndeksa),
            prosek: 7,
            username: user,
            password: pass
        };

        console.log(JSON.stringify(obj));
        axios.post('/student', obj, {
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

    }
    const Nazad=()=>{
        props.onNazad(0);
    }


    return (
        <form className="login-form" >
            <img className="index" src={Slika}></img>
            <h1>Register to E-index</h1>
            <h2>Please enter your data</h2>

            <label htmlFor="ime">IME</label>
            <input
                id="ime"
                type="text"
                onChange={imeHandler}
                className="inpuT"


            />
            <label htmlFor="prezime"> PREZIME</label>
            <input
                id="prezime"
                type="text"
                onChange={prezimeHandler}
                className="inpuT"
            />

            <label htmlFor="brojkartice">ID BROJA KARTICE</label>
            <input
                id="alternative"
                type="number"
                onChange={brojIndeksaHandler}
                className="inpuT"

            />
            <label htmlFor="username"> Username</label>
            <input
                id="username"
                type="email"
                onChange={userHandler}
                className="inpuT"

            />

            <label htmlFor="pwd"> Password</label>
            <input
                id="password"
                type="password"
                onChange={passHandler}
                className="inpuT"

            />



            <button onClick={clickHandler}> Register now</button>
            <label id="goBackLabel" onClick={Nazad}>GO BACK</label>




        </form>

    )
}

export default RegisterProfesor;