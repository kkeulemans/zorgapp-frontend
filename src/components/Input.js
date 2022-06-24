import React from "react";
import {useForm} from "react-hook-form";
function Input ({action}){
    const {register, formState: {errors}, handleSubmit, watch} = useForm({
        mode: 'onChange',


    });


    return(
        <label htmlFor="firstname-field">Voornaam:
    <input
        type="text"
        id="firstname-field"
        {...register("firstname", {
            required: "Voornaam is verplicht",
        })}
    />
    {errors.firstname && <p>{errors.firstname.message}</p>}

        </label>
    )
}
export default Input