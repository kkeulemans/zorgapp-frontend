import React from "react";
import Input from "../../components/Input";
import './Register.css'

function Register() {
    function handleSubmit(e) {
        e.preventDefault()
        let firstName = document.getElementById("first-name")
        let surname = document.getElementById("surname")
        let birthdate = document.getElementById("birthdate")
        let address = document.getElementById("address")
        let email = document.getElementById("email-address")


        console.log(`Voornaam: ${firstName.value} Achternaam: ${surname.value} Leeftijd:${birthdate.value} 
        Adres:${address.value}  email: ${email.value}`)
    }
    return (
       <>
           <h2>Registreer</h2>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <Input name="first-name" type="text" id="first-name" text="Voornaam: "/>
                <p></p>
                <Input name="surname" type="text" id="surname" text="Achternaam: "/>
                <p></p>
                <Input name="address" type="text" id="address" text="Adres: "/>
                <p></p>
                <Input name="email-address" type="text" id="email-address" text="Email-adres: "/>
                <p></p>
                <Input name="birthdate" id="birthdate" type="date" text="Geboortedatum: "/>

            </fieldset>


                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        name="newsletter"
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
        <p></p>
                <button type="submit" onSubmit={handleSubmit}>
                    Aanmelden
                </button>
        </form>
</>
    )
}

export default Register