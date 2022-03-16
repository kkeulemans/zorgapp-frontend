import React from "react";
import {NavLink} from "react-router-dom";


function Button ({type, text, onClick, path }){

    return (
        <button type={type} onClick={onClick}><NavLink className={text} to={path}>{text}</NavLink></button>
    )
}

export default Button;