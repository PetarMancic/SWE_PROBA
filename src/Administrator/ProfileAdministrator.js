import '../Student/ProfileStudent.css';
import Profilna from '../images/user.png';
import Table from 'react-bootstrap/Table';

import {Route,Routes} from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import ListaKartica from './AdministratorListe/ListaKartica';
import ListaPredmeta from './AdministratorListe/ListaPredmeta';
import ListaPrijavljenihIspita from './AdministratorListe/ListaPrijavljenihIspita';
import ListaProfesora from './AdministratorListe/ListaProfesora';
import ListaStudenata from './AdministratorListe/ListaStudenata';
import axios from '../api/axios';

import { adminSliceActions } from '../store';
import { useSelector, useDispatch } from 'react-redux';

import { profSliceActions } from '../store';
const ProfileAdministrator=()=>{
    ///////////////////////////////
    const [nav,setNav]=useState(0);
    
    const karticaHandler=()=>
    {
        setNav(1);
    }
    const predmetHandler=()=>
    {
        setNav(2);
    }
    const ispitHandler=()=>
    {
        setNav(3);
    }
    const profesorHandler=()=>
    {
        setNav(4);
    }
    const studentHandler=()=>
    {
        setNav(5);
    }
    const sakrijHandler=()=>
    {
        setNav(0);
    }
    //////////////////////////////////////
    const username=useSelector(state=>state.administratorPodaci.aUsername);
    const password=useSelector(state=>state.administratorPodaci.aPassword);
    return(
        <div class="w3-content w3-margin-top" style={{maxWidth:"1400px",position:'absolute',top:'35px',width:'1000%'}} >
        
        <div class="w3-row-padding">
        
          <div class="w3-third">
          </div>
          <div class="w3-third">
          </div>
      
          <div class="w3-twothird" >
          <div class="w3-container w3-card login-form">
              <h2 class="w3-text-grey w3-padding-16"><img src={Profilna} style={{position:'relative',height:'140px'}} className="img-rounded"/></h2>
              <div class="w3-container">
                
                <h2 class="w3-opacity"><h2>Username</h2></h2>
                <br />
                <h2 class="w3-text-teal">{username}</h2>
               
                <hr />
              </div>
              <div class="w3-container">
                
                <h2 class="w3-opacity"><h2>Password</h2></h2>
                <br />
                <h2 class="w3-text-teal">{password}</h2>
               
                <hr />
              </div>
              <div class="w3-container">
                <h1 class="w3-opacity"><b>Liste</b></h1>
                <h1 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>Izaberite listu koju zelite da vidite</h1>
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
      <li> <a onClick={studentHandler}>lista studenata</a></li>
      <li> <a onClick={profesorHandler}>Lista profesora</a></li>
     
      <li><a onClick={karticaHandler}>Lista kartica</a></li>
      <li><a onClick={predmetHandler}>Lista predmeta</a></li>
      <li><a onClick={ispitHandler}>Lista prijavljenih ispita</a></li>
    </ul>
   
  </div>
</div>
</nav>
{nav===1 && <ListaKartica/>}
{nav===2 && <ListaPredmeta/>}
{nav===3 && <ListaPrijavljenihIspita/>}

{nav===4 && <ListaProfesora/>}
{nav===5 && <ListaStudenata/>}



          
        </div>
        
      </div>
  </div>
      
    );

}
export default ProfileAdministrator;