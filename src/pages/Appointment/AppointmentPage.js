import NavBar from "../../components/NavBar/NavBar";
import Input from "../../components/Input";
import React, {useEffect, useState} from "react";
import "./AppointmentPage.css"
import axios from "axios";
function AppointmentPage(){
    const token = localStorage.getItem("token");
    const [date, setDate] = useState('dd-mm-yyyy');
    const [time, setTime] = useState('00:00');
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);
    async function setAppointment(token){
        try{
            await axios.post("http://localhost:8080/appointments/new", {
                date: date,
                time: time,
            },{ cancelToken: source.token,
                headers: {
                "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
            }})


        }
        catch (e){
            console.error(e)
        }

    }
    function handleSubmit(e) {
       e.preventDefault()
        console.log(time)
        console.log(date)
    setAppointment(token)

    }
    return(<>
        <NavBar/>
    <h1>Maak een afspraak</h1>

        <section>
            <h3>Afspraak Maken</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="appointment-date-field">
                    <Input name="appointment-date" id="appointment-date"
                           type="date" text="Datum: "
                           value={date}
                           action={(e) => setDate(e.target.value)}
                    /></label>
                <p></p>
                <label htmlFor="appointment-time"> <Input name="appointment-time" id="appointment-time" type= "time" text=" Tijd: "
                       value={time}
                       action={(e) => setTime(e.target.value)}
                ></Input></label>
                <p></p>
                <button type="submit">Bevestig</button>
            </form>

        </section>

    </>)
}
export default AppointmentPage