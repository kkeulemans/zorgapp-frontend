import React from "react";
import Button from "../components/Buttons";
import {useHistory} from "react-router-dom";


function Login({toggleAuth}){
    function nextPage(){
        toggleAuth(true);}
        return(
        <>
        <section>
            <h3>Login</h3>

            <Button text="Login" onClick={nextPage()}/>
        </section>



        </>
    );
}
export default Login;