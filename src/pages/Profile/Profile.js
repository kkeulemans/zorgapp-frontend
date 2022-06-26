import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";

function Profile() {
    const {user, isAuth, logout} = useContext(AuthContext);
    const [firstName, toggleFirstName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [sex, setSex] = useState();
    const [address, setAddress] = useState();
    const token = localStorage.getItem("token");

    async function getAccountInfo(user, token) {

        try {
            const response = await axios.get(`http://localhost:8080/users/${user}/account`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            toggleFirstName(response.data.firstName);
            setSurname(response.data.lastName);
            setBirthdate(response.data.birthdate);
            setSex(response.data.sex);
            setAddress(response.data.address);
            localStorage.setItem("id", response.data.id)
        } catch (e) {
            console.error(e);
        }
    }

    getAccountInfo(user.username, token)
    return (
        <>
            <NavBar authenticated={isAuth}></NavBar>
            <div>
                <fieldset>
                    <p>Naam: {firstName} {surname}</p>
                    <p>Geslacht: {sex} </p>
                    <p>Geboortedatum: {birthdate}</p>
                    <p>Adres: {address}</p>
                </fieldset>
            </div>
        </>
    );
}

export default Profile;