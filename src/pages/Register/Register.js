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
            <h2>Registratie</h2>

            <input type="radio" id="Huisarts" name="usertype" onClick={(e) => setUserType("Huisarts")}></input>
            <label htmlFor="Huisarts">Huisarts</label>
            <input type="radio" id="Client" name="usertype" onClick={(e) => setUserType("Client")} ></input>
            <label htmlFor="Client">Client</label>
            { userType === "huisarts" ? <Form userType="huisarts"/>: <Form userType="client"></Form> }
        </>
    )
}

export default Register;