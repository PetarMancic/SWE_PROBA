import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import Slika from "../images/index1.png";
import ErrorModal from '../Error/ErrorModal';
import './Login.css';
import Failure from "../images/cancel.png";
import Succes1 from "../images/check.png";
import { Link } from 'react-router-dom';
import Register from '../Student/RegisterStudent';
import Home from '../Student/Home';

import axios from '../api/axios';
import NavbarStudent from '../UI/Navbar/NavbarStudent';
import NavbarProfesor from '../UI/Navbar/NavbarProfesor';
import HomeP from '../Profesor/HomeP';
import RegisterStudent from '../Student/RegisterStudent';
import RegisterProfesor from '../Profesor/RegisterProfesor';
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


    const goBack = (value) => {
        setRegister(value);  // metoda koja nam sluzi da promeni vrednost za register promenljivu
        // ukoliko je register ===0 koja se postavlja u  RegisterStudent, onda ce da se vrati na pocetnu 
    }

    const [token, setToken] = useState('');

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

    const registerStudentHandler = () => {
        setRegister(1);
    }
    const registerProfesorHandler = () => {
        setRegister(2);
    }
    const [login, setLogin] = useState(0);

    const studentHandler = async (e) => {


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

                const token = response.data.token;
                setToken(token);

                if (response.status === 200) {
                    setLogin(1);
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
    const profesorHandler = async (e) => {
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
                const response = await axios.get(`/profesor/loginProfesor/${user}/${pwd}`);
                const { id, ime, prezime, idBrojKartice, username, password } = response.data;
                console.log(ime);

                const token = response.data.token;
                setToken(token);

                if (response.status === 200) {
                    setLogin(2);
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

                const token = response.data.token;
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
            {register === 0 && login === 0 && (<div>

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



                    <label id="register" onClick={registerStudentHandler}> Register as student </label>
                    <label id="register" onClick={registerProfesorHandler}> Register as professor </label>




                </form>


            </div>)}
            {
                register === 1 && (<RegisterStudent onNazad={goBack}> </RegisterStudent>)
            }
            {
                register === 2 && (<RegisterProfesor onNazad={goBack}> </RegisterProfesor>)
            }
            {
                register === 0 && login === 1 && (
                    <>
                        <Home />
                        <NavbarStudent />
                    </>
                )
            }
            {
                register === 0 && login === 2 && (
                    <>
                        <HomeP />
                        <NavbarProfesor />
                    </>
                )
            }

        </>
    );
}

//<button type="submit"> Login</button>
export default Login