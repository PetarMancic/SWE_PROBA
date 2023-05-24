import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'
import Administrator from './Administrator/Administrator';
import {Route,Routes,useLocation,Router} from 'react-router-dom';
import ProfesorProfil from './Profesor/ProfesorProfil';

function App() {
  const [defaultRoute, setDefaultRoute] = useState(2);
  
  return (
    <main className="App">
    
      <Login/>
      <NavbarStudent> </NavbarStudent>
      
  <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="/profil" element={<ProfileStudent />}/>
    <Route path='/poi' element={<Login />}/>
    <Route path="/salji" element={<Login />}/>
    <Route path="/pogledaj" element={<Login />}/>
    <Route path="/kuca" element={<Login />}/>
  </Routes>
 

      
    </main>
  );
}

export default App;
