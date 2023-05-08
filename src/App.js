import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import ProfileStudent from './Student/ProfileStudent'

function App() {
  return (
    <main className="App">
     <ProfileStudent/>
     <NavbarStudent></NavbarStudent>
      
    </main>
  );
}

export default App;
