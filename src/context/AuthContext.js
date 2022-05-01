import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {get} from "react-hook-form";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        account: null,
        status: 'pending',
    });
    const history = useHistory();
    const [firstName, toggleFirstName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [sex, setSex] = useState();
    const [address, setAddress] = useState();
    const [account, setAccount] = useState();
    const [array, setArray] = useState({});
    // MOUNTING EFFECT
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);

        fetchUserData(decoded.sub, JWT, '/profile');
        history.push('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    async function fetchUserData(id, token, redirectUrl) {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    apikey: result.data.apikey
                },
                status: 'done',
            });

            if (redirectUrl) {
                history.push(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }


    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        account: account,
        login: login,
        logout: logout,
        fetchUserData: fetchUserData,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;