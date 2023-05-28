import React, { useState } from "react";
import Slika from "../images/index1.png";
import '../Student/Register.css';
import axios from "../api/axios";
import Login from "../Login/Login";
import './Profesor.css';
import UspesnaReg from "../Poruka/UspesnaReg";
import { Navigate, useNavigate } from 'react-router-dom';





const RegisterProfesor = (props) => {
    const navigate = useNavigate();

    //za Bazu
    const [ime, setIme] = useState('');
    const [prezime, setprezime] = useState('');
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');
    const [idBrojKartice, setidBrojKartice] = useState(0);
    const [email, setEmail] = useState('');
    const [datumRodjenja, setdatumRodjenja] = useState(undefined);
    const [JMBG, setJMBG] = useState(0);
    const [radniStaz, setRadniStaz] = useState(0);
    const [imeR, setImeR] = useState('');







    //za crveno
    const [imeInput, setImeInput] = useState(true);
    const [prezimeInput, setprezimeInput] = useState(true);
    const [idBrojKarticeInput, setidBrojKarticeInput] = useState(true);
    const [userInput, setuserInput] = useState(true);
    const [passInput, setpassInput] = useState(true);
    const [emailInput, setEmailInput] = useState(true);
    const [datumRodjenjaInput, setdatumRodjenjaInput] = useState(true);
    const [JMBGInput, setJMBGInput] = useState(true);
    const [radniStazInput, setRadniStazInput] = useState(true);
    const [imeRInput, setImeRInput] = useState(true);







    //za log reg poc saltanje
    const [uspesnaReg, setUspesnaReg] = useState(1); // trenutna stranica 

    const ugasiFormu = () => {
        setUspesnaReg(0); //vraca ga na Login
    }


    //za proveru za crveno
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
    const brojKarticeHandler = (event) => { // ovo je za id kartice
        setidBrojKartice(event.target.value);

        if (brojKarticeHandler.length >= 0) {
            setidBrojKarticeInput(true);
        }
    }
    const userHandler = (event) => {
        setuser(event.target.value);

        if (user.trim().length >= 0) {
            setuserInput(true);
        }
    }
    const passHandler = (event) => {
        setpass(event.target.value);

        if (pass.trim().length >= 0) {
            setpassInput(true);
        }
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);

        if (email.trim().length >= 5 && email.includes('@')) {
            setEmailInput(true);
        }
    }
    const DatumRodjenjaHandler = (event) => {
        setdatumRodjenja(new Date(event.target.value));

        if (datumRodjenja != undefined) {
            setdatumRodjenjaInput(true);
        }
    }
    const JMBGHandler = (event) => {
        setJMBG(event.target.value);

        if (JMBGHandler.length >= 0) {
            setJMBGInput(true);
        }
    }
    const imeRHandler = (event) => {
        setImeR(event.target.value);

        if (imeR.trim().length >= 0) {
            setImeRInput(true);
        }
    }
    const radniStazHandler = (event) => {
        setRadniStaz(event.target.value);

        if (radniStazHandler.length >= 0) {
            setRadniStazInput(true);
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

        let brojKart = document.getElementById("brojKartice");
        if (brojKart.value.toString().length === 0) {
            setidBrojKarticeInput(false);
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
        if (email.trim().length < 5 || !email.includes('@')) {
            setEmailInput(false);
            setEmail('');
            promenljiva = true;

        }
        
        let brojJMBG = document.getElementById("jmbg");
        if (brojJMBG.value.toString().length === 0) {
            setJMBGInput(false);
            promenljiva = true;

        }
        let brojRS = document.getElementById("radnistaz");
        if (brojRS.value.toString().length === 0) {
            setRadniStazInput(false);
            promenljiva = true;

        }
        if (imeR.trim().length === 0) {
            setImeRInput(false);
            promenljiva = true;

        }





        if (promenljiva === true)
            return;



        const obj = {
            Ime: ime,
            Prezime: prezime,
            IdBrojKartice: idBrojKartice,
            Email:email,
            Password: pass,
            DatumRodjenja: datumRodjenja,
            JMBG: JMBG,
            RadniStaz: radniStaz,
            ImeRoditelja: imeR,
            ProsecnaOcena:0

        };
        console.log(obj);



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
        navigate('/');
    }
        
        



    return (
        <>
            {uspesnaReg === 1 &&
                <form className="login-form" >
                    <img className="index" src={Slika}></img>
                    <h1>Register to E-index</h1>
                    <h2 classname="odvoji">Please enter your data</h2>

                    <div className="spoljni">

                    <div className="levi">

                    <label htmlFor="ime">IME</label>
                    <label htmlFor="prezime"> PREZIME</label>
                    <input
                        id="ime"
                        type="text"
                        onChange={imeHandler}
                        className={`inpuT ${!imeInput ? 'pozadina' : ''}`}
                        />



                    <input
                        id="prezime"
                        type="text"
                        onChange={prezimeHandler}
                        className={`inpuT ${!prezimeInput ? 'pozadina' : ''}`}

                    />

                    <label htmlFor="brojkartice">ID BROJA KARTICE</label>
                    <label htmlFor="username"> Username</label>
                    <input
                        id="brojKartice"
                        type="number"
                        onChange={brojKarticeHandler}
                        className={`inpuT ${!idBrojKarticeInput ? 'pozadina' : ''}`}


                    />
                    <input
                        id="username"
                        type="email"
                        onChange={userHandler}
                        className={`inpuT ${!userInput ? 'pozadina' : ''}`}


                    />

                    <label htmlFor="pwd"> Password</label>
                    <label htmlFor="pwd"> </label>
                    <input
                        id="password"
                        type="password"
                        onChange={passHandler}
                        className={`inpuT ${!passInput ? 'pozadina' : ''}`}


                    />
                    </div>
                    <div className="desni">
                    <label htmlFor="Email"> Email</label>
                    <label htmlFor="date"> Datum Rodjenja</label>
                    <input
                        id="email"
                        type="email"
                        onChange={emailHandler}
                        className={`inpuT ${!emailInput ? 'pozadina' : ''}`}
                        
                        
                        />
                    <input
                        id="date"
                        type="string"
                        min={'01/01/1950'}
                        max={'12/12/1998'}
                        onChange={DatumRodjenjaHandler}
                        className={`inpuT ${!datumRodjenjaInput ? 'pozadina' : ''}`}
                        />

                    <label htmlFor="jmbg"> JMBG</label>
                    <label htmlFor="rs"> Radni Staz</label>
                    <input
                        id="jmbg"
                        type="number"

                        onChange={JMBGHandler}
                        className={`inpuT ${!JMBGInput ? 'pozadina' : ''}`}


                    />
                    <input
                        id="radnistaz"
                        type="number"

                        onChange={radniStazHandler}
                        className={`inpuT ${!radniStazInput ? 'pozadina' : ''}`}


                    />
                    
                    <label htmlFor="ir"> Ime Roditelja</label>
                    <label htmlFor="ir">  </label>

                    <input
                        id="imeRod"
                        type="text"
                        onChange={imeRHandler}
                        className={`inpuT ${!imeRInput ? 'pozadina' : ''}`}
                        />









                    </div>
            </div>
            <div>
                    <button onClick={clickHandler} className="dugmence"> Register now</button>
                    </div>
                    <label id="goBackLabel" onClick={Nazad}>GO BACK</label>
                </form>
            }
            {uspesnaReg === 0 && <Login> </Login>}

            {uspesnaReg === 2 && <UspesnaReg ugasiProzor={ugasiFormu}> </UspesnaReg>}
        </>
    )
}


export default RegisterProfesor;