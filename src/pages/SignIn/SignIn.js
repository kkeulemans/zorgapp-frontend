import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import zorgapp from "../../assets/zorgapp.png";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import './SignIn.css';

function SignIn(){
    const source = axios.CancelToken.source();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);


   async function logUserIn() {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            login(response.data.jwt);

        } catch(e) {
            console.error(e);

        }
    }

    function nextPage(e){
        e.preventDefault();
        logUserIn();
    }
        return(
        <>
            <div id="container">
        <article id="signIn">

            <img id="logo" src={zorgapp} alt="zorgapp logo"/>
            <form id="login" onSubmit={nextPage}>
                <label id="username" htmlFor="username-field">
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label id="password" htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div id="button-container"><button
                    id="submit-button" type="submit"
                    className="form-button">Login</button></div>

            </form>
            <NavLink id="register" to="/register">Registreren</NavLink>
        </article>

        </div>

        </>
    );
}
export default SignIn;