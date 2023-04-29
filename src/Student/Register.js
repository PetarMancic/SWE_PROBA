import React,{useState} from "react";
import Slika from "../images/index1.png";

const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

const handlerSubmit= ()=>
{

}


const Register = (props) => {
    return (
    <div>
        <form className="login-form" onSubmit={handlerSubmit}>
                    <img className="index" src={Slika}></img>
                    <h1>Welcome to E-index</h1>
                    <h2>Login</h2>

                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                      //  value={user}
                        onChange={userHandler}
                    />
                    <label htmlFor="pwd"> Password</label>
                    <input
                        id="password"
                        type="password"
                        value={pwd}
                        onChange={passwordHandler}
                    />
                     <input
                        id="password"
                        type="password"
                        value={pwd}
                        onChange={passwordHandler}
                    />
                    <button type="submit"> Login</button>
        

        </form>
    </div>
    )
}

export default Register;