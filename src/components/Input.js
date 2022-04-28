import React from "react";

function Input ({name, id, type, text,value,action}){

    return(
        <label htmlFor={name}>
            {text}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={action}
            />
        </label>
    )
}
export default Input