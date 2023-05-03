import React, { useState } from "react";
import Slika from "../images/index1.png";
import '../Student/Register.css';
import axios from "../api/axios";
import Login from "../Login/Login";
import './Profesor.css';
import UspesnaReg from "../Poruka/UspesnaReg";




const RegisterProfesor = (props) => {

    const [ime, setIme] = useState('');
    const [prezime, setprezime] = useState('');
    const [brojIndeksa, setbrojIndeksa] = useState(1);
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');


    const [imeInput, setImeInput] = useState(true);
    const [prezimeInput, setprezimeInput] = useState(true);
    const [idBrojKartice, setidBrojKartice] = useState(true);
    const [userInput, setuserInput] = useState(true);
    const [passInput, setpassInput] = useState(true);



    const [uspesnaReg, setUspesnaReg] = useState(1); // trenutna stranica 

    const ugasiFormu = () => {
        setUspesnaReg(0); //vraca ga na Login
    }



    const imeHandler = (event) => {
        setIme(event.target.value);

        if (ime.trim().length >= 0) {
            setImeInput(true);
        }

    }
    const prezimeHandler = (event) => {
        setprezime(event.target.value);

        if (prezime.trim().length >= 0) {
            setprezimeInput(true);
        }
    }
    const brojIndeksaHandler = (event) => { // ovo je za id kartice
        setbrojIndeksa(event.target.value);

        if (brojIndeksa.length >= 0) {
            setidBrojKartice(true);
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
        let promenljiva = false;

        if (ime.trim().length === 0) {
            setImeInput(false);
            promenljiva = true;


        }

        if (prezime.trim().length === 0) {
            setprezimeInput(false);
            promenljiva = true;

        }

        let brojInd = document.getElementById("brojKartice");
        if (brojInd.value.toString().length === 0) {
            setidBrojKartice(false);
            promenljiva = true;
        }




        if (user.trim().length === 0) {
            setuserInput(false);
            promenljiva = true;

        }

        if (pass.trim().length === 0) {
            setpassInput(false);
            promenljiva = true;

        }

        if (promenljiva === true)
             return;

        

        const obj = {
            ime: ime,
            prezime: prezime,
            idBrojKartice: brojIndeksa,
            username: user,
            password: pass
        };



        console.log(JSON.stringify(obj));
        axios.post('/profesor', obj, {
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                setUspesnaReg(2); // vodi na uspesan prozor 
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })



        }// zavrsetak od clickHandler





    const Nazad = () => {
        props.onNazad(0);
    }


    
    return (
        <>
            {uspesnaReg === 1 &&
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

                    <label htmlFor="brojkartice">ID BROJA KARTICE</label>
                    <input
                        id="brojKartice"
                        type="number"
                        onChange={brojIndeksaHandler}
                        className={`inpuT ${!idBrojKartice ? 'pozadina' : ''}`}

                    />
                    <label htmlFor="username"> Username</label>
                    <input
                        id="username"
                        type="email"
                        onChange={userHandler}
                        className={`inpuT ${!userInput ? 'pozadina' : ''}`}

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
            } 
            {uspesnaReg === 0 && <Login> </Login>}

            {uspesnaReg === 2 && <UspesnaReg ugasiProzor={ugasiFormu}> </UspesnaReg>}

        </>
    )
}


export default RegisterProfesor;