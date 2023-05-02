import React, { useState } from "react";
import Slika from "../images/index1.png";
import './Register.css';
import axios from "../api/axios";
import Login from "../Login/Login";




const RegisterStudent = (props) => {

    const [ime, setIme] = useState('');
    const [prezime, setprezime] = useState('');
    const [brojIndeksa, setbrojIndeksa] = useState(1);
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');

    const [imeInput, setImeInput] = useState(true);
    const [prezimeInput, setprezimeInput] = useState(true);
    const [brojIndeksaInput, setbrojIndeksaInput] = useState(true);
    const [userInput, setuserInput] = useState(true);
    const [passInput, setpassInput] = useState(true);



    const imeHandler = (event) => {
        setIme(event.target.value);

        if (ime.trim().length >= 0) {
            setImeInput(true);
        }
    }

    const prezimeHandler = (event) => {
        setprezime(event.target.value);

        console.log(prezime.trim().length);
        if (prezime.trim().length >= 0) {
            setprezimeInput(true);
        }
    }
    const brojIndeksaHandler = (event) => {
        setbrojIndeksa(event.target.value);

        if (brojIndeksa.length >= 0) {
            setbrojIndeksaInput(true);
        }

    }
    const userHandler = (event) => {
        setuser(event.target.value);

        if (prezime.trim().length >= 0) {
            setuserInput(true);
        }
    }
    const passHandler = (event) => {
        setpass(event.target.value);

        if (pass.trim().length >= 0) {
            setpassInput(true);
        }
    }

    const clickHandler = (e) => {
        e.preventDefault();

        if (ime.trim().length === 0) {
            setImeInput(false);


        }

        if (prezime.trim().length === 0) {
            setprezimeInput(false);


        }

        let brojInd = document.getElementById("alternative");
        if (brojInd.value.toString().length === 0) {
            setbrojIndeksaInput(false)


        }

        if (user.trim().length === 0) {
            setuserInput(false);


        }

        if (pass.trim().length === 0) {
            setpassInput(false);


        }

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
    const Nazad = () => {
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
                className={`inpuT ${!imeInput ? 'pozadina' : ''}`}



            />
            <label htmlFor="prezime"> PREZIME</label>
            <input
                id="prezime"
                type="text"
                onChange={prezimeHandler}
                className={`inpuT ${!prezimeInput ? 'pozadina' : ''}`}
            />

            <label htmlFor="brojIndeksa">BROJ INDEKSA</label>
            <input
                id="alternative"
                type="number"
                onChange={brojIndeksaHandler}
                className={`inpuT ${!brojIndeksaInput ? 'pozadina' : ''}`}

            />
            <label htmlFor="username"> Username</label>
            <input
                id="username"
                
                type="email"
                onChange={userHandler}
                className={` border inpuT ${!userInput ? 'pozadina' : ''}`}

            />

            <label htmlFor="pwd"> Password</label>
            <input
                id="password"
                type="password"
                onChange={passHandler}
                className={`inpuT ${!passInput ? 'pozadina' : ''}`}

            />



            <button onClick={clickHandler}> Register now</button>
            <label id="goBackLabel" onClick={Nazad}>GO BACK</label>




        </form>

    )
}

export default RegisterStudent;