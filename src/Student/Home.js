import React from "react";
import './Home.css';
const Home=()=>{
    return (  
  <div className="heder">
  <div class="jumbotron login-form">
  <div class="container text-center">
    <h1>Dobro dosli na E-index</h1>      
    <p className="slova">E-index je portal koji pruza studentima</p>
    <p className="slova">i profeosrima uvisd u svoje podatke</p>
    < p className="slova">bez odlaska na salter fakultata</p>
  </div>
</div>
<div className="login-form">   
<div class="container-fluid bg-3 text-center ">    
  <h1>Opcije koje nudi E-index</h1><br/>
  <div class="row">
    <div class="col-sm-3">
      <p className="slova">Uvid u polozene ispite</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
    <div class="col-sm-3"> 
      <p className="slova">Uvid u licne poatke</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
    <div class="col-sm-3"> 
      <p className="slova">Prijava i odjava ispita</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
  </div>
</div><br/>

<div class="container-fluid bg-3 text-center ">    
  <div class="row">
    <div class="col-sm-3">
      <p className="slova">komentari o profeosru i izbornom predmetu</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
  
    <div class="col-sm-3">
      <p className="slova">Ocenjivanje profeosra i izbornog predmeta</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
    
    <div class="col-sm-3">
      <p className="slova">Popunjavanje odgovarajuce forme za odabir izbornog predmeta</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:'1000%'}} alt="Image"/>
    </div>
    </div>
  </div>
  <div class="container-fluid bg-3 text-center">    
    <div class="row">
      <div class="col-sm-3 zadnji">
        <p className="slova">Uvid u tudje komentare o profeosru i izbornom predmetu</p>
        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive " style={{width:'1000%'}} alt="Image"/>
      </div>
    
      
    </div>
</div><br/><br/>
</div>
</div>
    );

}
export default Home;