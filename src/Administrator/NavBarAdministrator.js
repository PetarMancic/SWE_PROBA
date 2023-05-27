import React from 'react';
import '../UI/Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const NavbarAdministrator=()=>{
    const location=useLocation();
    return(
     
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
              <Link class="navbar-brand" to="/AdministratorHome">Home</Link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
             <li ><Link to="/AdministratorProfil">Profil</Link></li>
            
            <li><Link to="/AdministratorVratiPrijavljeneIspite">Pregled prijavljenih ispita</Link></li>
            
            <li><Link to="/AdministratorVratiIspite">Pregled svih ispita</Link></li>
            <li><Link to="/AdministratorDodajPredmet">Dodaj predmet</Link></li> 
            <li><Link to="/AdministratorVerifikacioniKod">Dodaj verifikaciju</Link></li>
            <li><Link to="/AdministratorDodajBrojKartice">Dodaj karticu</Link></li>
            <li><Link to="/AdministratorDodeliIspite">Dodaj ispite</Link></li>
            <li><Link to="/AdministratorObrisiNalog">Obrisi nalog</Link></li>
         
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to="/kuca"><span class="glyphicon glyphicon-log-in"></span> Log out</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    );

}
export default NavbarAdministrator;