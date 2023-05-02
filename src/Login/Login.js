import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import Slika from "../images/index1.png";
import ErrorModal from '../Error/ErrorModal';
import './Login.css';
import Failure from "../images/cancel.png";
import Succes1 from "../images/check.png";
import { Link } from 'react-router-dom';
import Register from '../Student/Register';
import Home from '../Student/Home';

import axios from '../api/axios';
import Navbar from '../UI/Navbar/Navbar';
import HomeP from '../Profesor/HomeP';
//Komentar
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState();
    const [register, setRegister] = useState(0);

    const [token,setToken]=useState('');

    /*const dugmeHandler = () => {
        async function fetchData() {
            try {
                const response = await axios.get('https://localhost:3000/student/loginStudent/mihajlomadic@gmail.com/mixa');
                console.log(response.data);
            }
            catch (err) {
                console.error(err);
            }

        }
    }*/


    const userHandler = (event) => {
        setUser(event.target.value);
    }
    const passwordHandler = (event) => {
        setPwd(event.target.value);

    }

    const errorHandler = () => {
        setError(null);
    }
    
    const registerHandler= ()=>
    {
        setRegister(1);
    }
    const [login,setLogin]=useState(0);
    const studentHandler=()=>{
        setLogin(1);

    }
    const profesorHandler=()=>{
        setLogin(2);
    }


    const handlerSubmit = async (e) => {
        e.preventDefault();

        if (user.trim().length === 0 && pwd.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid username and password ',
                    slika: Failure
                }
            )
        }
        if (user.trim().length != 0 && pwd.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a password',
                    slika: Failure
                }
            )
        }
        if (user.trim().length === 0 && pwd.trim().length != 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a Username',
                    slika: Failure
                }
            )
        }
        if (user.trim().length != 0 && pwd.trim().length != 0) {



            try {
                const response = await axios.get(`/student/loginStudent/${user}/${pwd}`);
                const { id, ime, prezime, brojIndeksa, prosek, username, password } = response.data;
                console.log(ime);

                const token=response.data.token;
                setToken(token);

                if (response.status === 200) {
                    console.log(response.data);
                    setError(
                        {
                            title: 'Uspesno ste prijavili ',
                            message: '',
                            slika: Succes1
                        }
                    )
                }

            }
            catch (err) {
                if (err.response && err.response.status === 500) {
                    setError(
                        {
                            title: 'Invalid input',
                            message: 'Please enter valid  Username or password',
                            slika: Failure
                        }
                    )

                } else {
                    console.error(err);
                }
            }


            const userName = user;
            const pass = pwd;

            console.log(userName, pass);
            setUser('');
            setPwd('');
        }

       
    }

    return (

        <>
        { register===0 && login===0 && (<div>
                
                {error && <ErrorModal title={error.title} message={error.message} slika={error.slika} ugasiProzor={errorHandler} />}

                <form className="login-form" onSubmit={handlerSubmit}>
                    <img className="index" src={Slika}></img>
                    <h1>Welcome to E-index</h1>
                    <h2>Login</h2>

                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={user}
                        onChange={userHandler}
                    />
                    <label htmlFor="pwd"> Password</label>
                    <input
                        id="password"
                        type="password"
                        value={pwd}
                        onChange={passwordHandler}
                    />
<div>
                <button type="submit" class="btn btn-primary btn-lg" onClick={studentHandler}>Login as student</button>
                <button type="button" class="btn btn-secondary btn-lg" onClick={profesorHandler}>Login as professor</button>
 </div>

                  

                        <label  id="register"  onClick={registerHandler}> Register now </label>




                </form>

            
            </div>) }
            {
                register===1 &&   ( <Register> </Register> )    
            }
            {
                register===0 && login===1 && (
                <>
                <Home />
                <Navbar/>
                </>
                )
            }
            {
                register===0 && login===2 && (
                    <>
                    <HomeP />
                    <Navbar />
                    </>
                )
            }
        
            </>
    );
}

//<button type="submit"> Login</button>
export default Login