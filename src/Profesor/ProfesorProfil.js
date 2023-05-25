import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Link, useNavigate }   from 'react-router-dom';
import {NavbarProfesor } from '../UI/Navbar/NavbarProfesor';
import PictureMan from "../Student/slike/muskarac.png";
import PictureWoman from "../Student/slike/zena.png";
import axios from "../api/axios";
import { Navigate } from 'react-router-dom';
import Predmeti from "../Student/Informacije/Predmeti";
import { predmetSliceActions } from "../store";



const ProfesorProfil = () => {
    const ime = useSelector(state => state.profesorPodaci.profIme);
    const prezime = useSelector(state => state.profesorPodaci.profPrezime);
    const profBrojTelefona = useSelector(state => state.profesorPodaci.profBrojTelefona);
    const brojKartice=  useSelector(state => state.profesorPodaci.profIDBrojKartice);
    const Email=  useSelector(state => state.profesorPodaci.profEmail);
    const Passowrd= useSelector(state => state.profesorPodaci.profPassword);
    const DatumRodjenja=  useSelector(state => state.profesorPodaci.profDatumRodjenja);
    const JMBG= useSelector(state => state.profesorPodaci.profJmbg);
    const RadniStaz= useSelector(state => state.profesorPodaci.profRadniStaz);
    const ImeRoditelja= useSelector(state => state.profesorPodaci.profImeRoditelja);
    const token= useSelector(state=>state.profesorPodaci.token);

    const navigate=useNavigate();
    const [tabela,setTabela]=useState(0);
    const dispatch = useDispatch();
   
const handlePredmete= async()  =>
{
    //http://localhost:4200/studenti
    //http://localhost:4200/profesor/vratiSvePredmete/${JMBG}
    console.log(`${JMBG}`);
    console.log("stampam token"+token);

    const response =await axios.get(`http://localhost:4200/profesor/vratiSvePredmete/${JMBG}`, {
         headers:{
           'Authorization':'Bearer '+token
         }
    })
    
      .then(response=>{
        
       // navigate('/Predmeti');
       // response.data.foreach(x=>console.log(x));
        dispatch(predmetSliceActions.postaviNaziv(response.data[0].Naziv));
         dispatch(predmetSliceActions.postaviESPB(response.data[0].ESPB));
         dispatch(predmetSliceActions.postaviSMER(response.data[0].Smer));
         dispatch(predmetSliceActions.postavigODINU(response.data[0].Godina));
         dispatch(predmetSliceActions.postaviOpis(response.data[0].Opis));
        /* dispatch(predmetSliceActions.userNumber(response.data[0].BrojTelefona));
         dispatch(predmetSliceActions.userProsek(response.data[0].Prosek));*/


       setTabela(1);


    })
      .catch(error=>{
        if(error.response && error.response.status===401){
          console.log("nevalidan token");
        }
        else{
          console.log("Greska u axios",error);
        }
      });

      console.log("ProfesorProfil ovde ");
}
    
    

    console.log(ime);
    return (

        
        <div class="w3-content w3-margin-top" style={{maxWidth:"1400px",position:'absolute',top:'35px',width:'1000%'}} >
           
        
        <div class="w3-row-padding">
        
          <div class="w3-third">
          
            <div class=" w3-text-grey w3-card-4 login-form">
              
              <div class="w3-container">
                {/* ovde fali provera atribua koji ce da se ucita iz baze da li je musko ili zensko 
                ako je musko onda ce da stavi sliku muskarca ako ne onda zensko  */}
                { <img src={PictureWoman} 
                style={{position:'relative',height:'140px'}} className="img-rounded"/> }
               
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
            <nav class="navbar navbar-inverse" style={{position:'relative',bottom:'0px'}} >
<div class="container-fluid">
  {/* <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>                        
    </button>
    <a class="navbar-brand active" onClick={sakrijHandler}>Sakrij</a>
  </div> */}
  {/* <div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav">
    <li> >Polozeni ispiti</a></li>
    <li> <a onClick={prijavljeniHandler}>Prijavljeni ispiti</a></li>
      <li><a onClick={ESPBHandler}>ESPB</a></li>
      <li><a >Svoji komentari</a></li>
    </ul>
   
  </div>*/}
 <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">

       

            <p  className="imena hoverEffect" onClick={handlePredmete} >  Prikazi sve predmete  </p> 

            

           
      </ul>
      
     
    </div>

</div> 
</nav>
{tabela===1 && <Predmeti> </Predmeti>}
{/* {nav===1 && <Polozeni/>}
{nav===2 && <Prijavljeni/>}
{nav===3 && <Espb/>} */}

          
        </div>
        
      </div>
  </div>
      
  );

    




}

export default ProfesorProfil;