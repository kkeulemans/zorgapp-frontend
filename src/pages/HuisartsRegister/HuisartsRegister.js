import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import "./HuisartsRegister.css"
import Input from "../../components/Input";

function HuisartsRegister() {
    let username = ''
    const token = localStorage.getItem("token");

    let key = '';
    const {register, formState: {errors}, handleSubmit, watch} = useForm({
        mode: 'onChange',
    });


    async function registerUser(data) {

        try {
            const response = await axios.post("http://localhost:8080/users", {
                username: data.email,
                email: data.email,
                password: data.password,
                enabled: true,
                apikey: null,

            })

            key = response.data.apikey

        }
        catch (e){
            console.log(e);
        }
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

          <div> <fieldset> <form onSubmit={handleSubmit(onFormSubmit)}>


                    <div><label id="firstname" htmlFor="firstname-field">Voornaam:
                    <input
                        type="text"
                        id="firstname-field"
                        {...register("firstname", {
                            required: "Voornaam is verplicht",
                        })}
                    /> </label>
                    {errors.firstname && <p>{errors.firstname.message}</p>}
          </div>
                    <label id="lastname" htmlFor="lastname-field">Achternaam:
                    <input
                        type="text"
                        id="lastname-field"
                        {...register("lastname", {
                            required: "Achternaam is verplicht",
                        })}
                    /> </label>
                    {errors.lastname && <p>{errors.lastname.message}</p>}


                    <label id="postcode" htmlFor="zipcode-field">Postcode:
                    <input
                        type="text"
                        {...register("zipcode", {
                            required: "Postcode is verplicht",
                            pattern: {
                                value: /^[0-9]{4}[a-zA-Z]{2}$/,
                                message: "Ongeldige postcode",
                            }
                        })}
                    /></label>
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}

                    <label id="address" htmlFor="address-field">Address:
                    <input type="text" id="address-field"
                           {...register("address", {required: "Adres is verplicht",})}/></label>
                    {errors.address && <p>{errors.address.message}</p>}
                    <label id="email" htmlFor="email-field">Email:
                    <input
                        type="text"
                        id="email-field"
                        {...register("email", {
                            required: "Email is verplicht",
                        })}
                    /></label>
                    {errors.email && <p>{errors.email.message}</p>}
                    <label id="password" htmlFor="password-field">Wachtwoord:
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
                    /></label>
                    {errors.password && <p>{errors.password.message}</p>}
                    <label id="terms" htmlFor="terms-and-conditions-field">
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
                    <div id="submit"><button type="submit">
                        Aanmelden
                    </button></div>
            </form>
          </fieldset>
        </div>
        </>
    )
}

export default HuisartsRegister;