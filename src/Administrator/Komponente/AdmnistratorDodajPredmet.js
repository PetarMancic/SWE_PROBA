import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  { useState } from 'react';
import axios from '../../api/axios';
import './dodajPredmet.css';
import Slika from '../slike/predmet.png'


const AdministratorDodajPredmet =()=>
{

    const [nazivPredmeta,setNazivPredmeta]=useState('');
    const [jmbgProf,setJmbgProf]=useState(0);
    const [smer,setSmer]=useState('');
    const [godina,setGodina]=useState('');
    const [opis,setOpis]=useState('');
    const [ESPB,setESPB]=useState('');



    const smerHandler=(event)=>
    {
        setSmer(event.target.value);
        console.log(smer);
    }
   const godinaHandler=(event)=>
   {
    setGodina(event.target.value);
    console.log(godina);
   }

   const ESPBHandler=(event)=>
   {
    setESPB(event.target.value);
    console.log(ESPB);

   }

    const opisHandler=(event)=>
    {
        setOpis(event.target.value);
        console.log(opis);
    }

    const predmetHandler=(event)=>
    {
        setNazivPredmeta(event.target.value);
        console.log(nazivPredmeta);
    }

    const jmbgHandler=(event)=>
    {
        setJmbgProf(event.target.value);
    }

    const [selektovano, setSelektovano] = useState('');

  
    const handleRadioChange = (event) => {
        const value = event.target.value;
        setSelektovano(value);
        console.log(selektovano);
      };


      const buttonHandler=()=>
      {

        const objekat={

            naziv:nazivPredmeta,
            ESPB:ESPB,
            opis:opis,
            smer:smer,
            godina:godina,
            izborni:selektovano,
        };

        axios.post(`administracija/dodajPredmet/${jmbgProf}`, objekat,
        {
            headers:{
                "Content-Type": "application/json" 
            }
        })
        .then(response=>
            {
                console.log("Uspesno!");
            })
            .catch(error => {
                console.log(error);
            })
      }


    return (
        <> 
    

    <form className="login-form" >
                    
    <h1>Dodavanje predmeta</h1>
    
    <img className="index" src={Slika}></img>

    <label htmlFor="naziv" style={{ size: '22px' }}>Naziv predmeta</label>
    <input
        id="username"
        type="text"
        // value={user}
        onChange={predmetHandler}
    />


    


<label htmlFor="pwd"> ESPB</label>
    <input
        id="password"
        type="text"
        // value={pwd}
          onChange={ESPBHandler}
    />

<label htmlFor="pwd"> SMER</label>
    <input
        id="password"
        type="text"
        // value={pwd}
          onChange={smerHandler}
    />

<label htmlFor="pwd"> GODINA</label>
    <input
        id="password"
        type="text"
        // value={pwd}
          onChange={godinaHandler}
    />

<label htmlFor="pwd"> OPIS</label>
    <input
        id="password"
        type="text"
        // value={pwd}
          onChange={opisHandler}
    />

<label htmlFor="pwd"> IZBORNI</label>

<label>
        <input
          type="radio"
          value="false"
          checked={selektovano === 'false'}
          onChange={handleRadioChange}
        />
        DA
      </label>
      <label>
        <input
          type="radio"
          value="true"
          checked={selektovano === 'true'}
          onChange={handleRadioChange}
        />
        NE
      </label>

      <label htmlFor="pwd"> JMBG PROFESORA</label>
    <input
        id="password"
        type="text"
        // value={pwd}
          onChange={jmbgHandler}
    />




    <div>
        <button type="submit" class="btn btn-primary btn-lg dugme" onClick={buttonHandler}> Dodaj predmet</button>
        
    </div>

   





</form>

</>
    )
}

 export default AdministratorDodajPredmet;