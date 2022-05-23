import NavBar from "../../components/NavBar/NavBar";
import Input from "../../components/Input";
import React, {useEffect, useState} from "react";
import "./AppointmentPage.css"
import axios from "axios";

function AppointmentPage() {
    const token = localStorage.getItem("token");
    const [date, setDate] = useState('dd-mm-yyyy');
    const [time, setTime] = useState('00:00');
    const source = axios.CancelToken.source();
    const id = localStorage.getItem("id");
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function addToAccount(token, id, appointmentId) {
        try {
            await axios.put(`http://localhost:8080/account/${id}/appointment/${appointmentId}/`, {}, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (e) {
        }
    }

    async function setAppointment(token) {
        try {
            const response = await axios.post("http://localhost:8080/appointments/new", {
                date: date,
                time: time,
            }, {
                cancelToken: source.token,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            localStorage.setItem('appointmentId', response.data.id);


        } catch (e) {
            console.error(e)
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        setAppointment(token)
        const appointmentId = localStorage.getItem('appointmentId')
        addToAccount(token, id, appointmentId)
    }

    return (
        <>
        <NavBar/>
        <div>
            <article>
                <h3>Afspraak Maken</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="appointment-date-field">
                        <p>  Datum </p>
                        <input name="appointment-date" id="appointment-date"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}/>
                    </label>
                    <p></p>

                    <p>Tijd</p>
                    <label htmlFor="appointment-time"> <input name="appointment-time" id="appointment-time" type="time"
                                                              value={time}
                                                              onChange={(e) => setTime(e.target.value)}
                    ></input></label>
                    <p>
                    <button type="submit">Bevestig</button></p>
                </form>

            </article>
        </div>
    </>)
}

export default AppointmentPage