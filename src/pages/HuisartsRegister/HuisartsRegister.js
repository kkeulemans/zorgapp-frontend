import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import "./HuisartsRegister.css"

function HuisartsRegister() {
    let username = ''
    const token = localStorage.getItem("token");

    let key = '';
    const {register, formState: {errors}, handleSubmit, watch} = useForm({
        mode: 'onChange',
    });


    async function registerUser(data) {
        const response = await axios.post("http://localhost:8080/users", {
            username: data.email,
            email: data.email,
            password: data.password,
            enabled: true,
            apikey: null,

        })

        key = response.data.apikey
    }

    async function addAuthority(apikey, username) {
        try {
            await axios.post(`http://localhost:8080/users/${username}/authorities`, {
                    authority: "ROLE_ADMIN"
                },
                {
                    Authority: apikey
                })
        } catch (e) {
            console.log(e);
        }
    }

    function onFormSubmit(data) {

        username = data.email;
        registerUser(data)
        addAuthority(key, username);


    }


    return (
        <>
            <h2>Registratie</h2>

            <form onSubmit={handleSubmit(onFormSubmit)}>

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
                            minLength: {
                                value: 8,
                                message: "wachtwoord moet minimaal 8 characters bevatten"
                            }

                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <p></p>
                    <label htmlFor="terms-and-conditions-field">
                        <p></p>
                        <input
                            type="checkbox"
                            id="terms-and-conditions-field"
                            {...register("terms", {
                                required: "Als u niet akkoord" +
                                    " gaat kunnen wij geen account voor u aanmaken",
                            })}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                    {errors.terms && <p>{errors.terms.message}</p>}
                    <p></p>
                    <button type="submit">
                        Aanmelden
                    </button>
                </fieldset>
            </form>

        </>
    )
}

export default HuisartsRegister;