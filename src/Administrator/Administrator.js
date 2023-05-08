import React from "react";
import { useRef, useState, useEffect, useContext } from 'react';
import ErrorModal from "../Error/ErrorModal";
import Failure from "../images/cancel.png";
import Succes1 from "../images/check.png";
import axios from '../api/axios';
const Administrator= (props) =>
{

//     const [error, setError] = useState();

//     // <img className="index" src={Slika}></img>
//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');

//     const [pwdInput, setPwdInput] = useState(true);
//     const [userInput, setUserInput] = useState(true);

    
//     const [token, setToken] = useState('');
//     const [login, setLogin] = useState(0);


//     const passHandler=(event)=>
//     {
//         setPwd(event.target.value);
//     }

//     const userHandler=(event)=>
//     {
//         setUser(event.target.value);
       
//     }

//     const errorHandler= ()=>
//     {
//         setError(null);
//     }


//     const studentHandler= async (e) =>
//     {
//         e.preventDefault();
//         console.log(login);
//         if (user.trim().length === 0 && pwd.trim().length === 0) {
//             setError(
//                 {
//                     title: 'Invalid input',
//                     message: 'Please enter a valid username and password ',
//                     slika: Failure
//                 }
//             )
//         }
//         if (user.trim().length != 0 && pwd.trim().length === 0) {
//             setError(
//                 {
//                     title: 'Invalid input',
//                     message: 'Please enter a password',
//                     slika: Failure
//                 }
//             )
//         }
//         if (user.trim().length === 0 && pwd.trim().length != 0) {
//             setError(
//                 {
//                     title: 'Invalid input',
//                     message: 'Please enter a Username',
//                     slika: Failure
//                 }
//             )
//         }
//         if (user.trim().length != 0 && pwd.trim().length != 0) {



//             try {
//                 const response = await axios.get(`/student/loginStudent/${user}/${pwd}`);
//                 const { id, ime, prezime, brojIndeksa, prosek, username, password } = response.data;
//                 console.log(ime);

//                 const token = response.data.token;
//                 setToken(token);

//                 if (response.status === 200) {
//                     setLogin(1);
//                     console.log(response.data);
//                     setError(
//                         {
//                             title: 'Uspesno ste prijavili ',
//                             message: '',
//                             slika: Succes1
//                         }
//                     )
//                 }

//             }
//             catch (err) {
//                 if (err.response && err.response.status === 500) {
//                     setError(
//                         {
//                             title: 'Invalid input',
//                             message: 'Please enter valid  Username or password',
//                             slika: Failure
//                         }
//                     )

//                 } else {
//                     console.error(err);
//                 }
//             }


//             const userName = user;
//             const pass = pwd;

//             console.log(userName, pass);
//             setUser('');
//             setPwd('');
//         }

        
//         return (
            
//             <>
//     {login===0 &&<ErrorModal title={error.title} message={error.message} slika={error.slika} ugasiProzor={errorHandler} />} 


//  {login===1 &&     <form className="login-form" >

// <h1>Welcome to E-index</h1>
// <h2>Login as administrator</h2>

// <label htmlFor="username">Username</label>
// <input
//     id="username"
//     type="text"
//     onChange={userHandler}
    
// />
// <label htmlFor="pwd"> Password</label>
// <input
//     id="password"
//     type="password"
//    onChange={passHandler}
   
// />
// <div>
//     <button type="submit" class="btn btn-primary btn-lg" onClick={studentHandler}>Login as administrator</button>
   
// </div>


   
// </form>
    
// }
//             </>
            
            
            
//             )
//         }
const vratiNazad=()=>
{
    props.onNazad(0);  // ovo ce da postavi uslovnu promenljivu na 0 i samim tim ce da da ucita login strana ponovo 
    

}

return (
    <div>
        <h1>Welcome to E-index</h1>
    <p> Uspesno ! </p>
        <button className="dugmeZaNazad" onClick={vratiNazad}> Go back </button>
    </div>
)

}
export default Administrator;