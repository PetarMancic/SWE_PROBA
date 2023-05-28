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
import Select from "react-select";
import { Navigate, useNavigate } from 'react-router-dom';


const RegisterStudent = (props) => {

    const navigate = useNavigate();
    const [ime, setIme] = useState('');
    const [prezime, setprezime] = useState('');
    const [brojIndeksa, setbrojIndeksa] = useState(1);
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');

    const [brTel, setBrTel] = useState('');
    const [email, setEmail] = useState('');

    const [imeRod, setImeRod] = useState('');
    const [datumRodjenja, setdatumRodjenja] = useState('');
    const [jmbg, setJmbg] = useState('');

    const [godStudija,setGodStudija]=useState('');
    const [smer1,setSmer1]=useState('');

    const [verifikacioniKod, setverifikacioniKod] = useState('');

    let smer = undefined;
    let godina = undefined;



    const [imeInput, setImeInput] = useState(true);
    const [prezimeInput, setprezimeInput] = useState(true);
    const [brojIndeksaInput, setbrojIndeksaInput] = useState(true);
    const [userInput, setuserInput] = useState(true);
    const [passInput, setpassInput] = useState(true);
    const [brTelInput, setbrTelInput] = useState(true);
    const [emailInput, setemailInput] = useState(true);
    const [godStudijaInput, setgodStudijaInput] = useState(true);
    const [imeRodInput, setimeRodInput] = useState(true);
    const [datumRodjenjaInput, setdatumRodjenjaInput] = useState(true);
    const [jmbgInput, setJmbgInput] = useState(true);
    const [smerInput, setSmerInput] = useState(true)
    ////////////////////////////////////////////////////
    const [selectedOption, setSelectedOption] = useState('');
   

    const smerovi = [{ value: 'Elektroenergetika', label: 'Elektroenergetika' },
    { value: 'Racunarstvo i informatika', label: 'Racunarstvo i informatika' },
    { value: 'Elektronika', label: 'Elektronika' },
    { value: 'Elektronske komponente i mikrosistemi', label: 'Elektronske komponente i mikrosistemi' },
    { value: 'Upravljanje sistemima', label: 'Upravljanje sistemima' },
    { value: 'Komunikacije i informacione tehnologije', label: 'Komunikacije i informacione tehnologije' }
    ];
    const godine = [{ value: '1', label: 'I' },
    { value: '2', label: 'II' },
    { value: '3', label: 'III' },
    { value: '4', label: 'IV' }
    ];

   const [smer2,setsmer2]=useState();

    const handlerZaGodine = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setGodStudija(selectedValue);

        console.log(selectedValue);
      };

      const handlerZaSmer = (event) => {
        const selectedValue = event.target.value;
        setsmer2(selectedValue);
        console.log(selectedValue);
      };


    const smerHandler = (event) => {
        setSmerInput(true)
        smer = event.value;
       // setSmer1(event.target.value);
        console.log("Izabrano", smer);
        const selectedValue = event.target.options[event.target.selectedIndex].value;
        console.log(selectedValue);


        
    };
    const godineHandler = (event) => {
        setgodStudijaInput(true);
        godina = event.value;
        console.log("Izabrano", event.target.value);
       // setGodStudija(event.targer.value);



    };


    /////////////////////////////////////////////////


    const [uspesnaReg, setUspesnaReg] = useState(1);
    const ugasiHandler = () => {
       // setUspesnaReg(0);
        navigate('/');  //mozda moze i -1
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

    const verifikacioniKodHandler=(event)=>
    {
        setverifikacioniKod(event.target.value);

        
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

        if (godina === undefined) {
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

        if (smer === undefined) {
            setSmerInput(false);
            zaustavi = true;
        }




        let brojInd = document.getElementById("BROJiNDEKSA");
        if (brojInd.value.toString().length === 0) {
            setbrojIndeksaInput(false)
            zaustavi = true;


        }



        if (pass.trim().length === 0) {
            setpassInput(false);
            zaustavi = true;


        }



console.log(zaustavi);
        if (zaustavi == false) {
            return;
        }
        const obj = {
            Ime: ime,
            Prezime: prezime,
            BrojTelefona: brTel,
            Email: email,
            Password: pass,
            Prosek:0,
            BrojIndexa: parseInt(brojIndeksa),
            TrenutnaGodinaStudija: parseInt(godStudija),
            ImeRoditelja: imeRod,
            DatumRodjenja: datumRodjenja,
            JMBG: jmbg,
            Smer: smer2,
            trenutniBrojOcena:0
           
        };

        console.log(obj);
        console.log(JSON.stringify(obj));
        axios.post(`/student/dodajStudenta/${verifikacioniKod}`, obj, {
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => { // uspesno je vraceno 
                setUspesnaReg(2);

                //uspesna reg 
                navigate('/uspesnaReg');
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
        navigate(-1);
    } // a ako ne definisem gore const navigate, ne mogu li da pozivam Navigate?
    // Navigate je neka klasa iz biblioteke, a ovo useNavigate je ustv taj hook
    // al ja kad idem iz login stranice na ovu za registraciju, koristim Navigate 


    return (
        
        <div className="redovi">
        {uspesnaReg === 0 && <Login />}

        {uspesnaReg === 1 && (
            
            <form className="login-form" >

                
                <img className="index" src={Slika}></img>

                <h1>Register to E-index</h1>
                <h2>Please enter your data</h2>



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

                <label htmlFor="brojTelefona"> BROJ TELEFONA</label>
                <label htmlFor="email"> EMAIL</label>
                <input
                    id="brojTelefona"
                    type="text"
                    onChange={brojTelefonaHandler}
                    className={`inpuT ${!brTelInput ? 'pozadina' : ''}`}
                />

                <input
                    id="email"
                    type="email"
                    onChange={EmailHandler}
                    className={`inpuT ${!emailInput ? 'pozadina' : ''}`}
                />

                <label htmlFor="pwd"> PASSWORD</label>
                <label htmlFor="brojIndeksa">BROJ INDEKSA</label>
                <input
                    id="password"
                    type="password"
                    onChange={passHandler}
                    className={`inpuT ${!passInput ? 'pozadina' : ''}`}
                    
                    />
                  
                <input
                    id="BROJiNDEKSA"
                    type="number"
                    onChange={brojIndeksaHandler}
                    className={`inpuT ${!brojIndeksaInput ? 'pozadina' : ''}`}

                />
                </div>
                <div className="desni">
                <label htmlFor="brojIndeksa">VERIFIKACIONI KOD</label>
                <label htmlFor="godinStudija"> Izaberite godinu studija</label>
                <input
                    id="verifikacioniKOD"
                    type="number"
                    onChange={verifikacioniKodHandler}
                    // className={`inpuT ${!brojIndeksaInput ? 'pozadina' : ''}`}

                />



    
    <select value={selectedOption} onChange={handlerZaGodine}>
    <option style={{color:"black"}} value="1">I</option>
    <option  style={{color:"black"}} value="2">II</option>
    <option style={{color:"black"}} value="3">III</option>
  </select>
                {/* <Select options={godine} placeholder='Odaberite' onChange={godineHandler} className={` crni-tekst  ${!smerInput ? 'pozadina' : ''}`}>


                </Select> */}

                


                <label htmlFor="Ime roditelja ">IME RODITELJA</label>
                <label htmlFor="datumRodjenja"> DATUM RODJENJA</label>
                <input
                    id="imeRoditelja"
                    type="text"
                    onChange={imeRoditeljaHandler}
                    className={`inpuT ${!imeRodInput ? 'pozadina' : ''}`}

                />
                <input
                    id="datumRodjenja"

                    type="text"
                    onChange={DatumRodjenjaHandler}
                    className={` border inpuT ${!datumRodjenjaInput ? 'pozadina' : ''}`}

                />

                <label htmlFor="jmbg"> JMBG</label>
                <label htmlFor="smer"> SMER</label>
                <input
                    id="jmbg"

                    type="text"
                    onChange={JMBGHandler}
                    className={` border inpuT ${!jmbgInput ? 'pozadina' : ''}`}

                />


                <select value={selectedOption} onChange={handlerZaSmer}>
    <option style={{color:"black"}} value="Elektroenergetika">Elektroenergetika</option>
    <option  style={{color:"black"}} value="Racunarstvo i informatika">Racunarstvo i informatika</option>
    <option style={{color:"black"}} value="opcija3">Opcija 3</option>
  </select>

                {/* <Select options={smerovi} placeholder='Odaberite smer' onChange={smerHandler} className={` crni-tekst  ${!smerInput ? 'pozadina' : ''}`}>


                </Select> */}











                </div>
                </div>
                <div>
                <button onClick={clickHandler} className="dugmence"> Register now</button>
                </div>
                <label id="goBackLabel" onClick={Nazad}>GO BACK</label>
            </form>
        )}
        {uspesnaReg === 2 && (<UspesnaReg ugasiProzor={ugasiHandler} />)}
    </div>

    )
}

export default RegisterStudent;