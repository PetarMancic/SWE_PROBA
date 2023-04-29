import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import Slika from "../images/index1.png";
import ErrorModal from '../Error/ErrorModal';
import './Login.css';
import Failure from "../images/cancel.png";
import Succes1 from "../images/check.png";

import axios from '../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [error,setError] =useState();

    const dugmeHandler = () => {
        async function fetchData() {
            try {
                const response = await axios.get('https://localhost:3000/student/loginStudent/mihajlomadic@gmail.com/mixa');
                console.log(response.data);
            }
            catch (err) {
                console.error(err);
            }

        }
    }


    const userHandler=(event)=>
    {
        setUser(event.target.value);
    }
    const passwordHandler=(event)=>
    {
        setPwd(event.target.value);

    }

    const errorHandler = ()=>
    {
        setError(null);
    }

  

    const handlerSubmit =  async (e) => {
        e.preventDefault();

        if(user.trim().length===0 && pwd.trim().length===0 )
        {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid username and password ',
                    slika : Failure
                }
            )
        }
        if(user.trim().length!=0 && pwd.trim().length===0)
        {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a password',
                    slika : Failure
                }
            )
        }
        if(user.trim().length===0 && pwd.trim().length!=0)
        {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a Username',
                    slika : Failure
                }
            )
        }
        if(user.trim().length!=0 && pwd.trim().length!=0)
        {
            
            setError(
                {
                    title: 'Uspesno ste prijavili ',
                    message: '',
                    slika : Succes1
                }
            )

            try {
                const response = await axios.get( `/student/loginStudent/${user}/${pwd}`);
               // response.data;
                console.log(response.data);
            }
            catch (err) {
                console.error(err);
            }


            const userName=user;
            const pass= pwd;
            
            console.log(userName, pass);
            setUser('');
            setPwd('');
        }

        
    }

    return (
        <div>
        { error && <ErrorModal   title={error.title} message={error.message} slika={error.slika}  ugasiProzor={errorHandler}/> }
       
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
                <button type="submit"> Login</button>
            </form>
        
        </div>
    );
}

export default Login