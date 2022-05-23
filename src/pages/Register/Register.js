import React, {useState} from "react";
import Input from "../../components/Input";
import './Register.css'
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import {useForm} from "react-hook-form";
import Buttons from "../../components/Buttons/Buttons";

function Register() {



    async function registerUser(data) {
        const response = await axios.post("http://localhost:8080/users", {
            username: data.email,
            email: data.email,
            password: data.password,
            enabled: true,
            apikey: null,

        })

    }

    function onFormSubmit(data) {
        registerUser(data)

    }


    return (
        <>
            <h2>Registratie</h2>
            <section>
            <Buttons type="text" text="Ik ben huisarts" path="/huisarts"></Buttons>
            <Buttons type="text" text="Ik ben client" path="/client"></Buttons>
        </section>
        </>
    )
}

export default Register