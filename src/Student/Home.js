import React from "react";
import './Home.css';
import Slika1 from "./slike/examKonacno.png";

import Slika2 from "./slike/info1.png";
import Slika3 from "./slike/exam1.png";
import Slika4 from "./slike/comments.png";
import Slika5 from "./slike/test.png";
import Slika6 from "./slike/form.png";
import Slika7 from "./slike/komentari.png";




const Home=()=>{
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
  <h1>Opcije koje nudi E-index</h1><br/>
  <div class="row">
    <div class="col-sm-3">
      <p className="class1">Uvid u polozene ispite</p>
      <img src={Slika1} class="img-responsive" style={{width:'80%'}} alt="Image"/>
     
    </div>
    <div class="col-sm-3"> 
      <p className="class1">Uvid u licne poatke</p>
      <img src={Slika2} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    <div class="col-sm-3"> 
      <p className="class1">Prijava i odjava ispita</p>
      <img src={Slika3} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
  </div>
</div><br/>

<div class="container-fluid bg-3 text-center ">    
  <div class="row">
    <div class="col-sm-3">
      <p className="class1">Komentari o profesoru i izbornom predmetu</p>
      <img src={Slika4} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
  
    <div class="col-sm-3">
      <p className="class1">Ocenjivanje profesora i izbornog predmeta</p>
      <img src={Slika5} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    
    <div class="col-sm-3">
      <p className="class1">Biranje izbornog predmeta</p>
      <img src={Slika6} class="img-responsive" style={{width:'80%'}} alt="Image"/>
    </div>
    </div>
  </div>
  <div class="container-fluid bg-3 text-center">    
    <div class="row">
      <div class="col-sm-3 zadnji">
        <p className="class1">Uvid u tudje komentare </p>
        <img src={Slika7} class="img-responsive " style={{width:'80%%'}} alt="Image"/>
      </div>
    
      
    </div>
</div><br/><br/>
</div>
</div>
    );

}
export default Home;