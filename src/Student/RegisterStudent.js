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
    
    const [brTel,setBrTel]=useState('');
    const [email,setEmail]= useState('');
    const [godStudija,setgodStudija]=useState('');
    const [imeRod,setImeRod]=useState('');
    const [datumRodjenja,setdatumRodjenja]=useState('');
    const [jmbg,setJmbg]=useState('');
    const [smer, setSmer]=useState('');





    const [imeInput, setImeInput] = useState(true);
    const [prezimeInput, setprezimeInput] = useState(true);
    const [brojIndeksaInput, setbrojIndeksaInput] = useState(true);
    const [userInput, setuserInput] = useState(true);
    const [passInput, setpassInput] = useState(true);

    const [brTelInput, setbrTelInput] = useState(true);
    const [emailInput, setemailInput] = useState(true);
    const [godStudijaInput,setgodStudijaInput]=useState(true);
    const [imeRodInput, setimeRodInput] = useState(true);
    const [datumRodjenjaInput, setdatumRodjenjaInput] = useState(true);
    const[ jmbgInput,setJmbgInput]=useState(true);
    const [smerInput,setSmerInput]=useState(true);





    const [uspesnaReg, setUspesnaReg] = useState(1);
    const ugasiHandler = () => {
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

       // console.log(prezime.trim().length);
        if (prezime.trim().length >= 0) {
            setprezimeInput(true);
        }
    }

    const brojTelefonaHandler = (event) => {
        setBrTel(event.target.value);

       // console.log(prezime.trim().length);
        if (brTel.trim().length >= 0) {
            setbrTelInput(true);
        }
    }


    const EmailHandler = (event) => {
        setEmail(event.target.value);

       // console.log(prezime.trim().length);
        if (email.trim().length >= 0) {
            setemailInput(true);
        }
    }

    const GodStudijaHandler = (event) => {
        setgodStudija(event.target.value);

       // console.log(prezime.trim().length);
        if (godStudija.trim().length >= 0) {
            setgodStudijaInput(true);
        }
    }



    const imeRoditeljaHandler = (event) => {
        setImeRod(event.target.value);

        if (imeRod.length >= 0) {
            setimeRodInput(true);
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

    const DatumRodjenjaHandler = (event) => {
        setdatumRodjenja(event.target.value);

        if (datumRodjenja.trim().length >= 0) {
            setdatumRodjenjaInput(true);
        }
    }

    const JMBGHandler = (event) => {
        setJmbg(event.target.value);

        if (jmbg.trim().length >= 0) {
            setJmbgInput(true);
        }
    }

    //za smer mora da bude padajuci meni i hvatanje 






    ///Klik hendler
    const clickHandler = (e) => {
        e.preventDefault();
        let zaustavi = false;

        if (ime.trim().length === 0) {
            setImeInput(false);
            zaustavi = true;
        }



        if (prezime.trim().length === 0) {
            setprezimeInput(false);
            zaustavi = true;
        }

        if (brTel.trim().length === 0) {
            setbrTelInput(false);
            zaustavi = true;
        }

        if (email.trim().length === 0) {
            setemailInput(false);
            zaustavi = true;
        }

        if (godStudija.trim().length === 0) {
            setgodStudijaInput(false);
            zaustavi = true;
        }

        if (imeRod.trim().length === 0) {
            setimeRodInput(false);
            zaustavi = true;
        }

        if (datumRodjenja.trim().length === 0) {
            setdatumRodjenjaInput(false);
            zaustavi = true;
        }

        if (jmbg.trim().length === 0) {
            setJmbgInput(false);
            zaustavi = true;
        }

        //FALIL ZA SMER 




        let brojInd = document.getElementById("BROJiNDEKSA");
        if (brojInd.value.toString().length === 0) {
            setbrojIndeksaInput(false)
            zaustavi = true;


        }

        

        if (pass.trim().length === 0) {
            setpassInput(false);
            zaustavi = true;


        }




        if (zaustavi == true) {
            return;
        }
        const obj = {
            Ime: ime,
            Prezime: prezime,
            BrojTelefona: brTel,
            Email: email,
            Password: pass,
            BrojIndexa: parseInt(brojIndeksa),
            TrenutnaGodinaStudija: parseInt(godStudija),
            ImeRoditelja: imeRod,
            DatumRodjenja: datumRodjenja,
            JMBG: jmbg,
            smer: "Opsti"
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
            {uspesnaReg === 0 && <Login />}

            {uspesnaReg === 1 && (

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

                    <label htmlFor="brojTelefona"> BROJ TELEFONA</label>
                    <input
                        id="brojTelefona"
                        type="text"
                        onChange={brojTelefonaHandler}
                        className={`inpuT ${!brTelInput ? 'pozadina' : ''}`}
                    />

                    <label htmlFor="email"> EMAIL</label>
                    <input
                        id="email"
                        type="email"
                        onChange={EmailHandler}
                        className={`inpuT ${!emailInput ? 'pozadina' : ''}`}
                    />

                     <label htmlFor="pwd"> PASSWORD</label>
                    <input
                        id="password"
                        type="password"
                        onChange={passHandler}
                        className={`inpuT ${!passInput ? 'pozadina' : ''}`}

                    />

                    <label htmlFor="brojIndeksa">BROJ INDEKSA</label>
                    <input
                        id="BROJiNDEKSA"
                        type="number"
                        onChange={brojIndeksaHandler}
                        className={`inpuT ${!brojIndeksaInput ? 'pozadina' : ''}`}

                    />

                    <label htmlFor="Trenutna god studija">GODINA STUDIJA</label>
                    <input
                        id="godStudija"
                        type="number"
                        onChange={GodStudijaHandler}
                        className={`inpuT ${!godStudijaInput ? 'pozadina' : ''}`}

                    />
                     <label htmlFor="Ime roditelja ">IME RODITELJA</label>
                    <input
                        id="imeRoditelja"
                        type="text"
                        onChange={imeRoditeljaHandler}
                        className={`inpuT ${!imeRodInput ? 'pozadina' : ''}`}

                    />
                    <label htmlFor="datumRodjenja"> DATUM RODJENJA</label>
                    <input
                        id="datumRodjenja"

                        type="text"
                        onChange={DatumRodjenjaHandler}
                        className={` border inpuT ${!datumRodjenjaInput ? 'pozadina' : ''}`}

                    />

                    <label htmlFor="jmbg"> JMBG</label>
                    <input
                        id="jmbg"

                        type="text"
                        onChange={JMBGHandler}
                        className={` border inpuT ${!jmbgInput ? 'pozadina' : ''}`}

                    />

                    <label htmlFor="smer"> SMER</label>
                    <input
                        id="smer"

                        type="text"
                        onChange={userHandler}
                        className={` border inpuT ${!userInput ? 'pozadina' : ''}`}

                    />

                

                    



                    <button onClick={clickHandler}> Register now</button>
                    <label id="goBackLabel" onClick={Nazad}>GO BACK</label>




                </form>
            )}
            {uspesnaReg === 2 && (<UspesnaReg ugasiProzor={ugasiHandler} />)}
        </div>

    )
}

export default RegisterStudent;