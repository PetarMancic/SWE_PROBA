import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'

import {Route,Routes} from 'react-router-dom';
import ProfesorProfil from './Profesor/ProfesorProfil';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import RegisterStudent from './Student/RegisterStudent';
import HomeAdministrator from './Administrator/HomeAdministrator';
import RegisterProfesor from './Profesor/RegisterProfesor';
import Espb from './Student/Informacije/Espb';
import Polozeni from './Student/Informacije/Polozeni';
import Prijavljeni from './Student/Informacije/Prijavljeni';
import ProfileAdministrator from './Administrator/ProfileAdministrator';
import NavbarAdministrator from './Administrator/NavBarAdministrator';
import PrijaviIspit from './Student/PrijaviIspit';
import Komentari from './Student/Komentari';
import PogledajKomentare from './Student/PogledajKomentare';
import IzborPredmeta from './Student/IzborPredmeta';
import AdministratorVratiIspite from './Administrator/Komponente/AdministratorVratiIspite';
import AdministratorDodajPredmet from './Administrator/Komponente/AdmnistratorDodajPredmet';
function App() {
  return (
   
    <main className="App">
    
      {/* <ProfesorProfil> </ProfesorProfil>  */}
      {/* <ProfileAdministrator/> */}
      {/* <NavbarStudent/> */}
      <NavbarAdministrator/>
      
      
  <Routes>
    <Route path="/" index={true} element={<HomeAdministrator/>} />
    <Route path="/Home" element={<Home />}/>

    <Route path="/registerStudent" element={<RegisterStudent />} />
    <Route path="/registerProfesor" element={<RegisterProfesor />}/>

    <Route path='/profil' element={<ProfileStudent />}/>
    <Route path='/poi' element={<PrijaviIspit />}/>
    <Route path='/komentari' element={<Komentari/>}/>
    <Route path='/pogledaj' element={<PogledajKomentare/>}/>
    <Route path='/izbor' element={<IzborPredmeta/>}/>
    <Route path='/kuca' element={<Login/>}/>
    <Route path='/Prijavljeni' element={<Prijavljeni />}/>
    <Route path="/AdministratorProfil"element={<ProfileAdministrator/>}/>
    <Route path="/AdministratorHome"element={<HomeAdministrator/>}/>
    <Route  path="/AdministratorVratiPrijavljeneIspite"element={<Login/>}/>        
    <Route path="/AdministratorVratiIspite"element={<AdministratorVratiIspite/>}/>
    <Route path="/AdministratorDodajPredmet"element={<AdministratorDodajPredmet/>}/> 
    <Route path="/AdministratorVerifikacioniKod"element={<Login/>}/>
    <Route path="/AdministratorDodajBrojKartice"element={<Login/>}/>
    <Route path="/AdministratorDodeliIspite"element={<Login/>}/>
    <Route path="/AdministratorObrisiNalog"element={<Login/>}/>
         

    

    

  </Routes>

 
    </main>

      
    
  );
}

export default App;
