import React from 'react';
import './Navbar.css';

const NavbarProfesor=()=>{
    return(
    <nav class="navbar navbar-inverse" >
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand active" href="#">Home</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li ><a href="#">Profil</a></li>
        <li><a href="#">Upisi ocenu</a></li>
        <li><a href="#">Pogledaj komentare i ocene o sebi</a></li>
        <li><a href="#">Pogledaj komentare i ocene o predmetu</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Log out</a></li>
      </ul>
    </div>
  </div>
</nav>
    );

}
export default NavbarProfesor;