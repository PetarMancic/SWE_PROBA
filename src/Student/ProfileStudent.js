import React, { useState } from "react";
import './ProfileStudent.css';
import Profilna from '../images/user.png';
import Table from 'react-bootstrap/Table';
import Polozeni from "./Informacije/Polozeni";
import Prijavljeni from "./Informacije/Prijavljeni";
import Espb from "./Informacije/Espb";
const ProfileStudent=()=>{
    const[navigacija,setNavigacija]=useState(0);
    const polozeniHandler=(event)=>{
        setNavigacija(1);
    }
    const prijavljeniHandler=(event)=>{
        setNavigacija(2);
    }
    const espbHandler=(event)=>{
        setNavigacija(3);
    }
    const sakriHandler=(event)=>{
        setNavigacija(0);
    }
    return (
        
        <div class="w3-content w3-margin-top" style={{maxWidth:"1400px",position:'absolute',top:'35px',width:'1000%'}} >
        
          <div class="w3-row-padding">
          
            <div class="w3-third">
            
              <div class=" w3-text-grey w3-card-4 login-form">
                
                <div class="w3-container">
                  <h2 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Neko Nekovic</h1></h2>
                  <img src={{Profilna}} className="img-rounded"/>
                 
                  <h3>Broj indeksa:11111</h3>
                  <br />
                  <h4>Smer:Automatika</h4>
                  <br />
                  <h4>Prosek:10.0</h4>
                  <br />
                  <h4>Godina studija:III</h4>
                  <br />
                  <hr />
        
                  <h1 class="w3-large"><h1><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Licni podaci</h1></h1>
                  <div className="row">
                  <div className="col-sm-6"><h3>JMBG</h3></div>
                  
                  <div className="col-sm-6"><h3>12345689101</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Datum rodjenja</h3></div>
                  
                  <div className="col-sm-6"><h3>3.3.1999</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Mesto rodjenja</h3></div>
                  
                  <div className="col-sm-6"><h3>Beograd</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-3"><h3>Adresa</h3></div>
                  
                  <div className="col-sm-9"><h3>Save kovacevica 10</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Grad</h3></div>
                  
                  <div className="col-sm-6"><h3>Beograd</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Ime oca</h3></div>
                  
                  <div className="col-sm-6"><h3>Stanko</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Mesto rodj</h3></div>
                  
                  <div className="col-sm-6"><h3>Beograd</h3></div>
                    
                </div>
                <div className="row">
                  <div className="col-sm-6"><h3>Telefon</h3></div>
                  
                  <div className="col-sm-6"><h3>0612129854</h3></div>
                    
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
                  <h6 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>Automatika</h6>
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
      <a class="navbar-brand active" onClick={sakriHandler}>Sakrij</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li> <a onClick={polozeniHandler}>Polozeni ispiti</a></li>
        <li> <a onClick={prijavljeniHandler}>Prijavljeni ispiti</a></li>
        <li><a onClick={espbHandler}>ESPB</a></li>
        <li><a href="#">Svoji komentari</a></li>
      </ul>
     
    </div>
  </div>
</nav>
{navigacija===1 &&<Polozeni />}
{navigacija===2 &&<Prijavljeni />}
{navigacija===3 &&<Espb />}
        
            
          </div>
          
        </div>
    </div>
        
    );

}
export default ProfileStudent;