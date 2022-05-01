import React from "react";
import {useForm} from "react-hook-form";
function Input ({action}){
    const {register, formState: {errors}, handleSubmit, watch} = useForm({
        mode: 'onChange',


    });


    return(
        <form onSubmit={handleSubmit(action)}>

            <fieldset>
                <label htmlFor="firstname-field">Voornaam: </label>
                <p></p>
                <input
                    type="text"
                    id="firstname-field"
                    {...register("firstname", {
                        required: "Voornaam is verplicht",
                    })}
                />
                {errors.firstname && <p>{errors.firstname.message}</p>}
                <p></p>
                <label htmlFor="lastname-field">Achternaam: </label>
                <p></p>
                <input
                    type="text"
                    id="lastname-field"
                    {...register("lastname", {
                        required: "Achternaam is verplicht",
                    })}
                />
                {errors.lastname && <p>{errors.lastname.message}</p>}

                <p></p>

                <label htmlFor="birthdate-field">Geboortedatum: </label>
                <p></p>
                <input
                    type="date"
                    id="birthdate-field"
                    {...register("birthdate", {
                        required: "Geboortedatum is verplicht",
                        min: {
                            value: '01/01/2004',
                            message: "Minimale leeftijd is 18",
                        }
                    })}
                />
                {errors.birthdate && <p>{errors.birthdate.message}</p>}
                <p></p>
                <label htmlFor="zipcode-field">Postcode: </label>
                <p></p>
                <input
                    type="text"
                    {...register("zipcode", {
                        required: "Postcode is verplicht",
                        pattern: {
                            value: /^[0-9]{4}[a-zA-Z]{2}$/,
                            message: "Ongeldige postcode",
                        }
                    })}
                />
                {errors.zipcode && <p>{errors.zipcode.message}</p>}

                <p></p>
                <label htmlFor="address-field">Address:</label>
                <p></p>
                <input type="text" id="address-field"
                       {...register("address", {required: "Adres is verplicht",})}/>
                {errors.address && <p>{errors.address.message}</p>}
                <p></p>
                <label htmlFor="email-field">Email:</label>
                <p></p>
                <input
                    type="text"
                    id="email-field"
                    {...register("email", {
                        required: "Email is verplicht",
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <p></p>
                <label htmlFor="password-field">Wachtwoord:</label>
                <p></p>
                <input
                    type="text"
                    id="password-field"
                    {...register("password", {
                        required: "Wachtwoord is verplicht",
                        minLength: { value: 8,
                            message: "wachtwoord moet minimaal 8 characters bevatten"}

                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <p></p>
                <label htmlFor="terms-and-conditions-field">
                    <p></p>
                    <input
                        type="checkbox"
                        id="terms-and-conditions-field"
                        {...register("terms-and-conditions")}
                    />
                    Ik ga akkoord met de algemene voorwaarden
                </label>
                <p></p>
                <button type="submit">
                    Aanmelden
                </button>
            </fieldset>
        </form>
    )
}
export default Input