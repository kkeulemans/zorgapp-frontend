import React, {useContext, useEffect, useState} from "react";
import Button from "../../components/Buttons";
import {useHistory} from "react-router-dom";
import zorgapp from "../../assets/zorgapp.png"
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import './SignIn.css'

function SignIn(){
    const history = useHistory();
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
            console.log(response.data.jwt)

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
        <section>

            <img src={zorgapp} alt="zorgapp logo"/>

            <form onSubmit={nextPage}>
                <label htmlFor="username-field">
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <p></p>
                <label htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <p></p>
                <button
                    type="submit"
                    className="form-button">Login</button>
            </form>
            <p></p>
        </section>



        </>
    );
}
export default SignIn;