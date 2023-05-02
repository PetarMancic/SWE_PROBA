import React from "react";
const Home=()=>{
    return (
        <form className="login-form">
        <div class="container-fluid text-center">
  <h2>Usluge</h2>
  <h4>Aplikacija nudi studentima</h4>
  <br />
  <div class="row">
    <div class="col-sm-4">
    <i class="icon-book"></i> icon-book
      <h4>Uvid</h4>
      <p>Uvid u sve svoje podatke vezane za fakultet</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-heart"></span>
      <h4>Prijava/Odjava</h4>
      <p>Prijava/Odjava ispita bez odlaska na salter</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-lock"></span>
      <h4>Anketiranje</h4>
      <p>Anonimno deljenje stava o profesoru/predmetu </p>
    </div>
    </div>
    <br /><br />
  <div class="row">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-leaf"></span>
      <h4>Ocenjivanje</h4>
      <p>Ocenjivanje predmeta/profesora od 1-5</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-certificate"></span>
      <h4>Informisanje</h4>
      <p>Uvid u komentare drugih studenata</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-wrench"></span>
      <h4>Dobro korisnicko iskustvo</h4>
      <p>Aplikacija je intuitivna i lako se koristi</p>
    </div>
  </div>
</div>
</form>
    );

}
export default Home;