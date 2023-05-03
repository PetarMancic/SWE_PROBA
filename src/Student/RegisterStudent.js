import React, { useState } from "react";
import Slika from "../images/index1.png";
import './Register.css';
import axios from "../api/axios";
import Login from "../Login/Login";
import ErrorModal from "../Error/ErrorModal";
import Slikauspeh from "../images/check.png";

//import classes from '../Erorr/ErrorModal.module.css';
import Card from '../Card';
import UspesnaReg from "../Poruka/UspesnaReg";




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


    const [uspesnaReg,setUspesnaReg]=useState(1);
    const ugasiHandler=()=>{
        setUspesnaReg(0);
    }

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
///Klik hendler
    const clickHandler = (e) => {
        e.preventDefault();
        let zaustavi=false;

        if (ime.trim().length === 0) {
            setImeInput(false);
            zaustavi=true;


        }

        if (prezime.trim().length === 0) {
            setprezimeInput(false);
            zaustavi=true;


        }

        let brojInd = document.getElementById("alternative");
        if (brojInd.value.toString().length === 0) {
            setbrojIndeksaInput(false)
            zaustavi=true;


        }

        if (user.trim().length === 0) {
            setuserInput(false);
            zaustavi=true;


        }

        if (pass.trim().length === 0) {
            setpassInput(false);
            zaustavi=true;


        }
        if(zaustavi==true)
        {
            return;
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
            .then(response => { // uspesno je vraceno 
                setUspesnaReg(2);
                // console.log("Uspesno dodat");
                // return (
                //     <div>
                //       <h1> Uspesno ste upisali u bazu !</h1>
                //     </div>
                //   );

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
        <div>
        {uspesnaReg===0&&<Login />}
        { uspesnaReg===1 &&(
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
        )}
        {uspesnaReg===2 && (<UspesnaReg ugasiProzor={ugasiHandler}/>)}
        </div>

    )
}

export default RegisterStudent;