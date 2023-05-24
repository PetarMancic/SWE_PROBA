import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'
import Administrator from './Administrator/Administrator';
import {Route,Routes} from 'react-router-dom';
import ProfesorProfil from './Profesor/ProfesorProfil';

function App() {
  return (
    <main className="App">
     {/* <ProfileStudent/> */}
     {/* <NavbarStudent></NavbarStudent> */}
      {/* <Administrator> </Administrator> */}
      {/* <Login></Login>  */}
      
       {/* <Home> </Home>  */}
      <Login/>
      
  <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="/profil" element={<ProfileStudent />}/>
    <Route path='/poi' element={<Login />}/>
    <Route path="/salji" element={<Login />}/>
    <Route path="/pogledaj" element={<Login />}/>
    <Route path="/kuca" element={<Login />}/>
  </Routes>
  {/* <Routes>
    <Route path="/HomeP" element={<HomeP />}/>
    <Route path="/ProfesorProfil" element={<ProfesorProfil />}/>
    <Route path='/ProfesorUpisOcene' element={<Login />}/>
    <Route path="/salji" element={<Login />}/>
    <Route path="/pogledaj" element={<Login />}/>
    <Route path="/kuca" element={<Login />}/>
  </Routes> */}

      
    </main>
  );
}

export default App;
