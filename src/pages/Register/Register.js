import React, {useEffect, useState} from "react";
import "./Register.css"
import Form from "../../components/Form/Form";

function Register() {
    const [userType, setUserType] = useState("ik");
    useEffect(() => {
        if (userType ==="Huisarts"){
            setUserType("huisarts");
        }
        else if (userType === "Client"){
            setUserType("client");
        }
    },[userType])
    return (
        <>
            <h2 id="page-title">Registratie</h2>
            <section id="user-choice">
            <input type="radio" id="Huisarts" name="usertype" onClick={(e) => setUserType("Huisarts")}></input>
            <label htmlFor="Huisarts">Huisarts </label>
            <input type="radio" id="Client" name="usertype" onClick={(e) => setUserType("Client")} ></input>
            <label htmlFor="Client">Client</label></section>
            { userType === "huisarts" ? <Form userType="huisarts"/>: <Form userType="client"></Form> }
        </>
    )
}

export default Register;