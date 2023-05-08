import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Home from './Student/Home';
import NavbarStudent from './UI/Navbar/NavbarStudent';
import Administrator from './Administrator/Administrator';


function App() {
  return (
    <main className="App">
      {/* <Administrator> </Administrator> */}
      <Login></Login> 
      
       {/* <Home> </Home>  */}
      {/* <NavbarStudent/> */}
      
      
    </main>
  );
}

export default App;
