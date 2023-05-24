import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'
import Administrator from './Administrator/Administrator';
import {Route,Routes} from 'react-router-dom';
import ProfesorProfil from './Profesor/ProfesorProfil';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import RegisterStudent from './Student/RegisterStudent';


function App() {
  return (
   
    <main className="App">
    
      {/* <ProfesorProfil> </ProfesorProfil>  */}
      
      
  <Routes>
    <Route path="/" index={true} element={<Login/>} />
    <Route path="/home" element={<Home />}/>
    <Route path="/registerStudent" element={<RegisterStudent />} />
    <Route path="/profil" element={<ProfileStudent />}/>
    <Route path='/poi' element={<Login />}/>
    <Route path="/salji" element={<Login />}/>
    <Route path="/pogledaj" element={<Login />}/>
    <Route path="/kuca" element={<Login />}/>

     <Route path="/upisiOcenu" element={<Login/>} /> 

  </Routes>

 
    </main>

      
    
  );
}

export default App;
