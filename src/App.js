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

function App() {
  return (
   
    <main className="App">
    
      {/* <ProfesorProfil> </ProfesorProfil>  */}
      <HomeAdministrator/>
      
      
  <Routes>
    <Route path="/" index={true} element={<Login/>} />
    <Route path="/Home" element={<Home />}/>
    <Route path="/registerStudent" element={<RegisterStudent />} />
    <Route path="/registerProfesor" element={<RegisterProfesor />}/>

    <Route path='/profileStudent' element={<ProfileStudent />}/>
    <Route path='/Espb' element={<Espb />}/>
    <Route path='/Polozeni' element={<Polozeni/>}/>
    <Route path='/Prijavljeni' element={<Prijavljeni />}/>

    

    

  </Routes>

 
    </main>

      
    
  );
}

export default App;
