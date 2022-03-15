import React from "react";

function Input ({name, id, type, text}){

    return(
        <label htmlFor={name}>
            {text}
            <input
                type={type}
                name={name}
                id={id}
            />
        </label>
    )
}
export default Input