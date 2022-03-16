import React from "react";
import Button from "../components/Buttons";
import {useHistory} from "react-router-dom";
import zorgapp from "../assets/zorgapp.png"

function Login({toggleAuth, isAuth}){
    const history = useHistory();
    function nextPage(){
        toggleAuth(true);
    }
        return(
        <>
        <section>
            <h3>Login</h3>
            <img src={zorgapp}/>

            <Button text="Login" onClick={nextPage()} path="/message"/>
        </section>



        </>
    );
}
export default Login;