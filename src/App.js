import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'
import Administrator from './Administrator/Administrator';
import {Route,Routes,useLocation,Router} from 'react-router-dom';
import ProfesorProfil from './Profesor/ProfesorProfil';
import HomeAdministrator from './Administrator/HomeAdministrator';
import NavbarAdministrator from './Administrator/NavBarAdministrator';
import { useState,useEffect } from 'react';
function App() {
  const [defaultRoute, setDefaultRoute] = useState(2);
  
  return (
    
    <main className="App">
    
      {/* <Login/> */}
      {/* <HomeAdministrator/> */}
      <NavbarAdministrator/>
    
  <Routes>
    <Route path='/' element={defaultRoute==1 ?(<Home />):(<HomeAdministrator/>)}/>
   <Route path="/home" element={<Home />}/>
    <Route path="/profil" element={<ProfileStudent />}/>
    <Route path='/poi' element={<Login />}/>
    <Route path="/salji" element={<Login />}/>
    <Route path="/pogledaj" element={<Login />}/>
    <Route path="/kuca" element={<Login />}/>
    
    <Route path="/AdministratorHome"element={<HomeAdministrator/>}/>
    <Route  path="/AdministratorVratiStudente" element={<Login/>}/>
    <Route path="/AdministratorVratiProfesore" element={<Login/>}/>
    <Route path="/AdministratorVratiKodove" element={<Login/>}/>
    <Route path="/AdministratorVratiBrojeveKartica"element={<Login/>}/>
    <Route path="/AdministratorVratiPredmete" element={<Login/>}/>
    <Route path="/AdministratorVratiIspite" element={<Login/>}/>
    <Route path="/AdministratorDodajPredmet"element={<Login/>}/>
    <Route path="/AdministratorVerifikacioniKod" element={<Login/>}/>
    <Route path="/AdministratorDodajBrojKartice"element={<Login/>}/>
    <Route path="/AdministratorDodeliIspite"element={<Login/>}/>
    <Route path="/AdministratorObrisiNalog"element={<Login/>}/>
    
         
  </Routes>
   
    </main>
    
  );
}

export default App;
