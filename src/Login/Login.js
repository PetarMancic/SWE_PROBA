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
import Administrator from '../Administrator/Administrator';

import axios from '../api/axios';
import NavbarStudent from '../UI/Navbar/NavbarStudent';
import NavbarProfesor from '../UI/Navbar/NavbarProfesor';
import HomeP from '../Profesor/HomeP';
import RegisterStudent from '../Student/RegisterStudent';
import RegisterProfesor from '../Profesor/RegisterProfesor';
import ProfileStudent from '../Student/ProfileStudent';

import { useSelector, useDispatch } from 'react-redux';
import { userSliceActions } from '../store/index';
import { profSliceActions } from '../store/index';
import ProfesorProfil from '../Profesor/ProfesorProfil';
//Komentar
const LOGIN_URL = '/auth';
const Login = () => {
     
    const dispatch=useDispatch();
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState();
    
    const [promenljiva,setPromenljiva]=useState(0);
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState();
    const [register, setRegister] = useState(0);

    const [administrator,setAdministrator] = useState(0);  // ako je 0 onda ne crta 


    

    const goBack = (value) => {
        setRegister(value);  // metoda koja nam sluzi da promeni vrednost za register promenljivu
        // ukoliko je register ===0 koja se postavlja u  RegisterStudent, onda ce da se vrati na pocetnu 
    }
    
    const goBackLogin=(value)=>
    {
        setLogin(value);
    }

    const token=useSelector(state=>state.token);

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

    

    const LoginAdministratorHandler=  async (event )=>
    {
        event.preventDefault();

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

                // const response = await axios.get(`/student/loginStudent/${user}/${pwd}`);
                // const { id, ime, prezime, brojIndeksa, prosek, username, password } = response.data;
                // console.log(ime);

                // const token = response.data.token;
                // setToken(token);

                setLogin(3); // samo za probu

                // if (response.status === 200) {
                //     setLogin(3);
                //     console.log(response.data);
                //     setError(
                //         {
                //             title: 'Uspesno ste prijavili ',
                //             message: '',
                //             slika: Succes1
                //         }
                //     )
                // }

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
///////////////////////////////////////////////


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
                const response =await axios.get(`/student/loginStudent/${user}/${pwd}`);
                setPromenljiva(1);
                console.log("nakon dodelu");
            //console.log(student.ime);
            
            
            //token = response.data.token;
            
            if (response.status === 200) {
                
                // setUser(user);
                // setPwd(pwd);
                // localStorage.setItem('user',user);
                // localStorage.setItem('pwd',pwd);
                dispatch(userSliceActions.userEmail(user));
                dispatch(userSliceActions.userPass(pwd));
                dispatch(userSliceActions.userIme(response.data.student.Ime));
                dispatch(userSliceActions.userPrezime(response.data.student.Prezime));
                dispatch(userSliceActions.userNumber(response.data.student.BrojTelefona));
                dispatch(userSliceActions.userProsek(response.data.student.Prosek));
                dispatch(userSliceActions.userIndeks(response.data.student.BrojIndexa));
                dispatch(userSliceActions.userGodina(response.data.student.TrenutnaGodinaStudija));
                dispatch(userSliceActions.userRoditelj(response.data.student.imeRoditelja));
                dispatch(userSliceActions.userDatum(response.data.student.DatumRodjenja));
                dispatch(userSliceActions.userJmbg(response.data.student.JMBG));
                dispatch(userSliceActions.userSmer(response.data.student.Smer));
                dispatch(userSliceActions.userToken(response.data.token));
                
                
                
                
                
                
                
                
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
        }
    }
    
    //////
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
                console.log(response.data);
                // const { id, ime, prezime, idBrojKartice,email,password,datumROdjenja,jmbg,radniStaz,imeRoditelja,
                //     prosecnaOcena,trenutniBrojOcena } = response.data;
                // console.log(ime);
                
                const token = response.data.token;
                // setToken(token);
                
                if (response.status === 200) {
                    console.log("uso u 200");
                    console.log(response.data.profesor.Ime);
                    
                    dispatch(profSliceActions.postaviIme(response.data.profesor.Ime));
                    dispatch(profSliceActions.postaviPrezime(response.data.profesor.Prezime));
                    dispatch(profSliceActions.postaviBrojTelefona(response.data.profesor.BrojTelefona));
                    dispatch(profSliceActions.postaviIDBrojKartice(response.data.profesor.IdBrojKartice));
                    dispatch(profSliceActions.postaviprofEmail(response.data.profesor.Email));
                    dispatch(profSliceActions.postaviprofPass(response.data.profesor.Password));
                    dispatch(profSliceActions.postaviProfDatumRodjenja(response.data.profesor.DatumRodjenja));
                    dispatch(profSliceActions.postaviProfJMBG(response.data.profesor.JMBG));
                    dispatch(profSliceActions.postaviprofRadniStaz(response.data.profesor.RadniStaz));
                    dispatch(profSliceActions.postaviprofImeRoditelja(response.data.profesor.ImeRoditelja));
                    dispatch(profSliceActions.postaviToken(response.data.Token));
                    
                    
                    
                    
                    
                    
                    
                    setLogin(2);
                    
                    /*dispatch(profSliceActions.postavi(ime));
                    dispatch(profSliceActions.postavi(ime));
                    dispatch(profSliceActions.postavi(ime));
                    dispatch(profSliceActions.postavi(ime));
                    dispatch(profSliceActions.postavi(ime));
                    dispatch(profSliceActions.postavi(ime));*/

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

                //const token = response.data.token;
               // setToken(token);

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
                    <button type="button" class="btn btn-secondary btn-lg" onClick={LoginAdministratorHandler}>Login as administrator</button> 



                    <label id="register" onClick={registerStudentHandler}> Register as student </label>
                    <label id="register" onClick={registerProfesorHandler}> Register as professor </label>




                </form>


            </div>)
            }

            {
                register === 1 && (<RegisterStudent onNazad={goBack}> </RegisterStudent>)
            }

            {
                register === 2 && (<RegisterProfesor onNazad={goBack}> </RegisterProfesor>)
            }
            {
                register === 0 && login === 1 &&  (
                    <>
                        <ProfileStudent />
                        <NavbarStudent  />
                    </>
                )
            }

            {
                register === 0 && login === 2 && (
                    <>
                        <ProfesorProfil />
                        <NavbarProfesor />
                    </>
                )
            }

            {
                register ===0 && login===3 && 
                (
                    <>
                        <Administrator onNazad={goBackLogin} > </Administrator>
                    </>
                )
            }

        </>
    );
}

//<button type="submit"> Login</button>
export default Login;