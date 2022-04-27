import NavBar from "../../components/NavBar/NavBar";
import Input from "../../components/Input";
import React from "react";

function AppointmentPage(){
    function handleSubmit(e) {
        e.preventDefault()}
    return(<>
        <NavBar/>
    <h1>Maak een afspraak</h1>

        <section>
            <form>
                <Input name="appointment-date" id="appointment-date" type="date" text="Datum: "/>
                <Input name="appointment-time" id="appointment-time" type= "time" text=" Tijd: "></Input>

            </form>
            <button type="submit">Maak Afspraak</button>
        </section>

    </>)
}
export default AppointmentPage