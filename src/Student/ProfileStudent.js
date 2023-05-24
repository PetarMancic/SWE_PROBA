
import './ProfileStudent.css';
import Profilna from '../images/user.png';
import Table from 'react-bootstrap/Table';
import Polozeni from "./Informacije/Polozeni";
import Prijavljeni from "./Informacije/Prijavljeni";
import Espb from "./Informacije/Espb";
import {Route,Routes} from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import ErrorModal from '../Error/ErrorModal';



import axios from '../api/axios';
import ProfileStudentNav from './ProfileStudentNav';
import Login from '../Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { userSliceActions } from '../store';
import { profSliceActions } from '../store';


const ProfileStudent=(props)=>{
  
  const ime=useSelector(state=>state.studentPodaci.uIme);
  const prezime=useSelector(state=>state.studentPodaci.uPrezime);
  const broj=useSelector(state=>state.studentPodaci.uBrojTelefona);
  const user=useSelector((state)=>state.studentPodaci.uEmail);
  const pwd=useSelector((state)=>state.studentPodaci.uPassword);
  const prosek=useSelector(state=>state.studentPodaci.uProsek);
  const index=useSelector(state=>state.studentPodaci.uBrojIndeksa);
  const godina=useSelector(state=>state.studentPodaci.uTrenutnaGodStudija);
  const roditelj=useSelector(state=>state.studentPodaci.uImeRoditelja);
  const datum=useSelector(state=>state.studentPodaci.uDatumRodjenja);
  const jmbg=useSelector(state=>state.studentPodaci.uJmbg);
  const smer=useSelector(state=>state.studentPodaci.uSmer);
  const dispatch=useDispatch();
 
    
/////////////////////////////////////////////////////////////////////
const [nav,setNav]=useState(0);
const polozeniHandler=()=>{
  setNav(1);

}
const prijavljeniHandler=()=>{
  setNav(2);

}
const ESPBHandler=()=>{
  setNav(3);

}
const sakrijHandler=()=>{
  setNav(0);

}
//////////////////////////////////////////////////////////////////////
    return (
        
        <div class="w3-content w3-margin-top" style={{maxWidth:"1400px",position:'absolute',top:'35px',width:'1000%'}} >
        
          <div class="w3-row-padding">
          
            <div class="w3-third">
            
              <div class=" w3-text-grey w3-card-4 login-form">
                
                <div class="w3-container">
                  <img src={Profilna} style={{position:'relative',height:'140px'}} className="img-rounded"/>
                  <h2 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>{ime} {prezime}</h1></h2>
                 
                  <h3>Broj indeksa:{index}</h3>
                  <br />
                  <h4>Smer:{smer}</h4>
                  <br />
                  <h4>Prosek:{prosek}</h4>
                  <br />
                  <h4>Godina studija:{godina}</h4>
                  <br />
                  <hr />
        
                  <h1 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Licni podaci</h1></h1>
                  <div className="row">
                  <div className="col-sm-6"><h3>JMBG</h3></div>
                  
                  <div className="col-sm-6"><h3>{jmbg}</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Datum rodjenja</h3></div>
                  
                  <div className="col-sm-6"><h3>{datum}</h3></div>
                    
                </div>
               
                <div className="row">
                  <div className="col-sm-6"><h3>Ime roditelja</h3></div>
                  
                  <div className="col-sm-6"><h3>{roditelj}</h3></div>
                    
                </div>
                
                <div className="row">
                  <div className="col-sm-6"><h3>Telefon</h3></div>
                  
                  <div className="col-sm-6"><h3>{broj}</h3></div>
                    
                </div>
                  <br />
        
                </div>
              </div><br />
        
            </div>
        
            <div class="w3-twothird">
            <div class="w3-container w3-card login-form">
                <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Edukacija</h2>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>Tip studija</b></h5>
                  <h6 class="w3-text-teal">Onsovne akademske studije</h6>
                 
                  <hr />
                </div>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>Studijski program</b></h5>
                  <h6 class="w3-text-teal"><i class="w3-opacityt"></i>Elektrotehnika i racunarstvo</h6>
                  
                  <hr />
                </div>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>Smer</b></h5>
                  <h6 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>{smer}</h6>
                  <br />
                </div>
              </div>
              <nav class="navbar navbar-inverse" style={{position:'relative',bottom:'0px'}} >
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand active" onClick={sakrijHandler}>Sakrij</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li> <a onClick={polozeniHandler}>Polozeni ispiti</a></li>
        <li> <a onClick={prijavljeniHandler}>Prijavljeni ispiti</a></li>
        <li><a onClick={ESPBHandler}>ESPB</a></li>
        <li><a >Svoji komentari</a></li>
      </ul>
     
    </div>
  </div>
</nav>
{nav===1 && <Polozeni/>}
{nav===2 && <Prijavljeni/>}
{nav===3 && <Espb/>}

            
          </div>
          
        </div>
    </div>
        
    );

}
export default ProfileStudent;