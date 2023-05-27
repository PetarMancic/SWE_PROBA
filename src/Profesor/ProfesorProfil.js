import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { NavbarProfesor } from '../UI/Navbar/NavbarProfesor';
import PictureMan from "../Student/slike/muskarac.png";
import PictureWoman from "../Student/slike/zena.png";
import axios from "../api/axios";
import { Navigate } from 'react-router-dom';
import Predmeti from "../Student/Informacije/Predmeti";
import { predmetSliceActions, profSliceActions } from "../store";
import Komentari from "../Student/Informacije/Komentari";




const ProfesorProfil = () => {
  const ime = useSelector(state => state.profesorPodaci.profIme);
  const prezime = useSelector(state => state.profesorPodaci.profPrezime);
  const profBrojTelefona = useSelector(state => state.profesorPodaci.profBrojTelefona);
  const brojKartice = useSelector(state => state.profesorPodaci.profIDBrojKartice);
  const Email = useSelector(state => state.profesorPodaci.profEmail);
  const Passowrd = useSelector(state => state.profesorPodaci.profPassword);
  const DatumRodjenja = useSelector(state => state.profesorPodaci.profDatumRodjenja);
  const JMBG = useSelector(state => state.profesorPodaci.profJmbg);
  const RadniStaz = useSelector(state => state.profesorPodaci.profRadniStaz);
  const ImeRoditelja = useSelector(state => state.profesorPodaci.profImeRoditelja);
  const token = useSelector(state => state.profesorPodaci.token);

  const navigate = useNavigate();
  const [tabelaPredmeta, settabelaPredmeta] = useState(0);
  const [tabelaKomentara, settabelaKomentara] = useState(0);
  const dispatch = useDispatch();

  const handlePredmete = async () => {
    //http://localhost:4200/studenti
    //http://localhost:4200/profesor/vratiSvePredmete/${JMBG}
    console.log(`${JMBG}`);
    console.log("stampam token" + token);

    // const response =await axios.get(`http://localhost:4200/profesor/vratiSvePredmete/${JMBG}`, 


    if (tabelaPredmeta === 1) {
      settabelaPredmeta(0);
    }
    else {
      const response = await axios.get(`http://localhost:4200/profesor`,
        {
          //  headers:{
          //    'Authorization':'Bearer '+token
          //  }
        })
        .then(response => {

              dispatch(profSliceActions.postaviPredmete(response.data.Predmeti));
        }
        )
        .catch(error => {
          if (error.response && error.response.status === 401) {
            console.log("nevalidan token");
          }
          else {
            console.log("Greska u axios", error);
          }
        });
        settabelaPredmeta(1);
      }
  
    }


const  handleKomentare=async ()=>
{
    if(tabelaKomentara===1)
    {
      settabelaKomentara(0);
    }
    else
    {
      const response = await axios.get(`http://localhost:4200/profesor`,
      {
        //  headers:{
        //    'Authorization':'Bearer '+token
        //  }
      })
      .then(response => {

            dispatch(profSliceActions.postaviKomentare(response.data.Komentari));
      }
      )
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.log("nevalidan token");
        }
        else {
          console.log("Greska u axios", error);
        }
      });
      settabelaKomentara(1);
    }
}

  
  return (


    <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px", position: 'absolute', top: '35px', width: '1000%' }} >


      <div class="w3-row-padding">

        <div class="w3-third">

          <div class=" w3-text-grey w3-card-4 login-form">

            <div class="w3-container">
              {/* ovde fali provera atribua koji ce da se ucita iz baze da li je musko ili zensko 
                ako je musko onda ce da stavi sliku muskarca ako ne onda zensko  */}
              {<img src={PictureWoman}
                style={{ position: 'relative', height: '140px' }} className="img-rounded" />}

              <h2 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>{ime} {ImeRoditelja}{prezime}</h1></h2>

              <h3>ID kartice:{brojKartice}</h3>
              <br />
              {/* <h4>Smer:{smer}</h4> */}
              <br />
              {/* <h4>Prosek:{prosek}</h4> */}
              <br />
              {/* <h4>Godina studija:{godina}</h4> */}
              <br />
              <hr />

              <h1 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Licni podaci</h1></h1>
              <div className="row">
                <div className="col-sm-6"><h3>JMBG</h3></div>

                <div className="col-sm-6"><h3>{JMBG}</h3></div>

              </div>
              <div className="row">
                <div className="col-sm-6"><h3>Datum rodjenja</h3></div>

                <div className="col-sm-6"><h3>{DatumRodjenja}</h3></div>

              </div>

              <div className="row">
                <div className="col-sm-6"><h3>Ime roditelja</h3></div>

                <div className="col-sm-6"><h3>{ImeRoditelja}</h3></div>

              </div>

              <div className="row">
                <div className="col-sm-6"><h3>Telefon</h3></div>

                <div className="col-sm-6"><h3>{profBrojTelefona}</h3></div>

              </div>
              <br />

            </div>
          </div><br />

        </div>

        <div class="w3-twothird">
          <div class="w3-container w3-card login-form">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Dodatno</h2>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>Radni staz</b></h5>
              <h6 class="w3-text-teal">{RadniStaz}</h6>

              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>Email</b></h5>
              <h6 class="w3-text-teal"><i class="w3-opacityt"></i>{Email}</h6>

              <hr />
            </div>
            <div class="w3-container">
              <h5 class="w3-opacity"><b>Kontakt</b></h5>
              <h6 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>{profBrojTelefona}</h6>
              <br />
            </div>
          </div>
          <nav class="navbar navbar-inverse mojaKlasa" style={{ position: 'relative', bottom: '0px' }} >
                  <p className="imena hoverEffect" onClick={handlePredmete} >  Prikazi moje predmete  </p>
                  <p className="imena hoverEffect" onClick={handleKomentare} >  Prikazi komentare  </p>
                 


            {/* <div class="container-fluid mojaKlasa">
              
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">

                </ul>
               
                  

              </div>
            </div> */}
                  


          </nav>


                


          {tabelaPredmeta === 1 && <Predmeti> </Predmeti>}
          {tabelaKomentara === 1 && <Komentari> </Komentari>}
          

        </div>
      </div>
    </div>



  );






}

export default ProfesorProfil;