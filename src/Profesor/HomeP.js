import React from "react";
const HomeP=()=>{
    return (
        <form className="login-form">
        <div class="container-fluid text-center">
  <h2>Usluge</h2>
  <h4>Aplikacija nudi profesorina</h4>
  <br />
  <div class="row">
    <div class="col-sm-4">
    <i class="icon-book"></i> icon-book
      <h4>Uvid</h4>
      <p>Uvid u sve svoje biografske podatke</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-heart"></span>
      <h4>Upis ocene</h4>
      <p>Upis ocene onlajn putem</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-lock"></span>
      <h4>Anketiranje profesora</h4>
      <p>Pregled komentara studenata o profesoru </p>
    </div>
    </div>
    <br /><br />
  <div class="row">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-leaf"></span>
      <h4>Anketiranje predmeta</h4>
      <p>Uvid u komentare o predmetu na kome profoesor predaje</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-certificate"></span>
      <h4>Ocenjivanje</h4>
      <p>Uvid u ocene koje su dali studenti o profeoru i predmetu n kome profesor predaje </p>
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
export default HomeP;