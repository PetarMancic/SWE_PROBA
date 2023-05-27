import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavbarProfesor=()=>{
  return(
     
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <Link class="navbar-brand" to="/home">Home</Link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li ><Link to="/profil">Profil</Link></li>
          <li><Link to="/poi">Prijavi ispit</Link></li>
          <li><Link to="/komentari">Posalji komentar</Link></li>
          <li><Link to="/pogledaj">Pregledaj komentare</Link></li>
          <li><Link to='/izbor'>Izaberi izborni predmet</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><Link to="/kuca"><span class="glyphicon glyphicon-log-in"></span> Log out</Link></li>
        </ul>
      </div>
    </div>
  </nav>

  );

}
export default NavbarProfesor;