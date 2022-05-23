import React, {useState} from "react";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import {useForm} from "react-hook-form";

function ClientRegister(){
    let username = '';
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [firstName, toggleFirstName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [sex, setSex] = useState();
    let key = '';
    const {register, formState: {errors}, handleSubmit, watch} = useForm({
        mode: 'onChange',
    });


    async function registerUser(data) {
        const response =  await axios.post("http://localhost:8080/users", {
            username: data.email,
            email: data.email,
            password: data.password,
            enabled: true,
            apikey: null,

        })

        key = response.data.apikey
    }

    async function addAuthority(apikey, username){
        try{ await axios.post(`http://localhost:8080/users/${username}/authorities`, {
                authority: "ROLE_USER"
            },
            {
                Authority: apikey })}
        catch (e){
            console.log(e);
        }
    }

    async function addAccount (apikey, username){
        try{ await axios.post(`http://localhost:8080/users/${username}/authorities`, {
                authority: "ROLE_USER"
            },
            {
                Authority: apikey })}
        catch (e){
            console.log(e);
        }

    }

    function onFormSubmit(data) {
       username = data.email


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
                                message: "Wachtwoord moet minimaal 8 characters bevatten"}

                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <p></p>
                    <label htmlFor="terms-and-conditions-field">
                        <p></p>
                        <input
                            type="checkbox"
                            id="terms-and-conditions-field"
                            {...register("terms", {required: "Als u niet akkoord" +
                                    " gaat kunnen wij geen account voor u aanmaken",})}
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
export default ClientRegister;