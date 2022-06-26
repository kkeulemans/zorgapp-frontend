import React, {useState} from "react";
import './Form.css'
import axios from "axios";
import {useForm} from "react-hook-form";

function Form({userType}) {
    let username = '';
    let key = '';
    let account = 0;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [sex, setSex] = useState('');
    const {register, formState: {errors}, handleSubmit} = useForm({
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
        } catch (e) {
            console.log(e);
        }
    }


    async function addAdminAuthority(apikey, username) {
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
    async function addUserAuthority(apikey, username) {
        try {
            await axios.post(`http://localhost:8080/users/${username}/authorities`, {
                    authority: "ROLE_USER"
                },
                {
                    Authority: apikey
                })
        } catch (e) {
            console.log(e);
        }
    }

    async function addAccount(apikey, username, firstName,
                              lastName,postcode,address, sex) {
        try {
            const response = await axios.post(`http://localhost:8080/account/new`, {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    address: address + " " + postcode,
                    sex: sex
                })

            account = response.data.id;
            console.log(response.data.id)
            console.log(account)
            addAccountToUser(key,username,account)
        } catch (e) {
            console.log(e);
        }

    }

    async function addAccountToUser (apikey, username, accountId){
        try {
            await axios.put(`http://localhost:8080/account/${accountId}/${username}`,{
                },
        {
            Authority: apikey
        })

        }
        catch (e){
            console.log(e);
        }
    }

    function onFormSubmit(data) {
        username = data.email
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setPostcode(data.zipcode);
        setAddress(data.address);
        setSex(data.sex);
        console.log(address)
        console.log(lastName);
        registerUser(data)
        addAccount(key, username, firstName,lastName,postcode,address)
        console.log(account)

        if (userType === "client"){
        addUserAuthority(key, username);}
        else if (userType==="huisarts"){
            addAdminAuthority(key,username)
        }

    }


    return (
        <>
            <article id="registration">
            <form id="form" onSubmit={handleSubmit(onFormSubmit)}>


                <label id="firstname" htmlFor="firstname-field"><p>Voornaam:</p>
                        <input
                            type="text"
                            id="firstname-field"
                            {...register("firstname", {
                                required: "Voornaam is verplicht",
                            })}
                        />
                        {errors.firstname && <p id="error-firstname">{errors.firstname.message}</p>}
                    </label>
                <label id="lastname" htmlFor="lastname-field"><p>Achternaam:</p>
                        <input
                            type="text"
                            id="lastname-field"
                            {...register("lastname", {
                                required: "Achternaam is verplicht",
                            })}
                        />
                        {errors.lastname && <p id= "error-lastname">{errors.lastname.message}</p>}
                    </label>

                {userType === "client"  ?  <label id="birthdate" htmlFor="birthdate-field"><p>Geboortedatum:</p>
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
                        {errors.birthdate && <p id="error-birthday">{errors.birthdate.message}</p>}</label> : null}
                {userType === "client"  ? <label id="sex" htmlFor="sex-field"> <p>Geslacht:</p>
                <input
                type="string"
                id="sex-field"
                    {...register("sex", {required: "Geslacht is verplicht"})}/>
                {errors.sex && <p id="error-sex"> {errors.sex.message}</p>}</label> : null}

                <label id="address" htmlFor="address-field"><p>Address:</p>
                        <input type="text" id="address-field"
                               {...register("address", {required: "Adres is verplicht",})}/>
                        {errors.address && <p id="address-message">{errors.address.message}</p>}
                    </label>
                <label id="email" htmlFor="email-field"><p>Email:</p>
                        <input
                            type="text"
                            id="email-field"
                            {...register("email", {
                                required: "Email is verplicht",
                            })}
                        />
                        {errors.email && <p id="email-error">{errors.email.message}</p>}
                    </label>
                <label id="password-position" htmlFor="password-field"><p>Wachtwoord:</p>
                        <input
                            type="text"
                            id="password-field"
                            {...register("password", {
                                required: "Wachtwoord is verplicht",
                                minLength: {
                                    value: 8,
                                    message: "Wachtwoord moet minimaal 8 characters bevatten"
                                }

                            })}
                        />
                        {errors.password && <p id="error-password">{errors.password.message}</p>}
                    </label>

                    <label id="terms" htmlFor="terms-and-conditions-field">
                        <input
                            type="checkbox"
                            id="terms-and-conditions-field"
                            {...register("terms", {
                                required: "Als u niet akkoord gaat kunnen wij geen account voor u aanmaken",
                            })}
                        />
                        Ik ga akkoord met de algemene voorwaarden

                    {errors.terms && <p>{errors.terms.message}</p>}
                    </label>
                    <p>
                    <button id="register-button"  type="submit">
                        Aanmelden
                    </button></p>
            </form>
                    </article>
        </>
    )
}


export default Form