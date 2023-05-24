import React from "react";
import '../Student/Home.css';
import Slika1 from "../Student/slike/examKonacno.png";

import Slika2 from "../Student/slike/info1.png";
import Slika3 from "../Student/slike/exam1.png";
import Slika4 from "../Student/slike/comments.png";
import Slika5 from "../Student/slike/test.png";
import Slika6 from "../Student/slike/form.png";
import Slika7 from "../Student/slike/komentari.png";
import { Route, Routes } from "react-router-dom";





const HomeAdministrator=()=>{
    return (  
  <div className="heder">
  <div class="jumbotron login-form">
  <div class="container text-center">
    <h1 className="Naslovslova">DOBRODOSLI NA E-INDEX</h1>

    <p className="Naslovslova">E-index je portal koji pruza studentima</p>
    <p className="Naslovslova">i profesorima uvid u svoje podatke</p>
    < p className="Naslovslova">bez odlaska na salter fakulteta</p>
  </div>
</div>
<div className="login-form">   
<div class="container-fluid bg-3 text-center ">    
  <h1>Opcije koje nudi E-index Aministratoru</h1><br/>
  <div class="row">
    <div class="col-sm-3">
      <p className="class1">Uvid u profile svih profesora</p>
      <img src={Slika1} class="img-responsive" style={{width:'80%'}} alt="Image"/>
     
    </div>
    <div class="col-sm-3"> 
      <p className="class1">Uvid u profile svih studenata</p>
      <img src={Slika2} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    <div class="col-sm-3"> 
      <p className="class1">Uvid u podatke svih predmeta</p>
      <img src={Slika3} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
  </div>
</div><br/>

<div class="container-fluid bg-3 text-center ">    
  <div class="row">
    <div class="col-sm-3">
      <p className="class1">Dodavanje predmeta</p>
      <img src={Slika4} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
  
    <div class="col-sm-3">
      <p className="class1">Dodavanje verifikacionog koda</p>
      <img src={Slika5} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    
    <div class="col-sm-3">
      <p className="class1">Dodeljivanje ispita studentima</p>
      <img src={Slika6} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    <div class="col-sm-3">
      <p className="class1">Uvid u sve prijavljene ispite</p>
      <img src={Slika6} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    </div>
  </div>
  <div class="container-fluid bg-3 text-center">    
    <div class="row">
      <div class="col-sm-3 zadnji">
        <p className="class1">Brisanje naloga </p>
        <img src={Slika7} class="img-responsive " style={{width:'80%%'}} alt="Image"/>
      </div>
    
      
    </div>
</div><br/><br/>
</div>

</div>
    );

}
export default HomeAdministrator;