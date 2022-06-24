import React, {useState} from "react";
import Input from "../../components/Input";
import './Register.css'
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import {useForm} from "react-hook-form";
import Buttons from "../../components/Buttons/Buttons";

function Register() {


    return (
        <>
            <h2>Registratie</h2>
            <section>
            <Buttons type="button" text="Ik ben huisarts" path="/huisarts"></Buttons>
            <Buttons type="button" text="Ik ben client" path="/client"></Buttons>
        </section>
        </>
    )
}

export default Register