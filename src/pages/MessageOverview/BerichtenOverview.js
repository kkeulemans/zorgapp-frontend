import './BerichtenOverview.css'
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import NavBar from "../../components/NavBar/NavBar";
import "./BerichtenOverview.css"


function BerichtenOverview() {
    const token = localStorage.getItem("token");
    let array = [];
    const [messages, setMessages] = useState([]);
    const account = localStorage.getItem("id");
    useEffect(() => {
        async function getMessages(account, token) {

            try {
                const response = await axios.get(`http://localhost:8080/${account}/messages/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const messageList = response.data;
                array[0] = messageList[0]
                console.log(array[0].id)
                const titles = messageList.map((message) => {
                    return message.title
                })
                setMessages(titles);
            } catch (e) {
                console.error(e)
            }
        }

        getMessages(account, token);
    },[account]);


    return (
        <>
            <NavBar/>
            <h3>Bericht Overzicht</h3>
            <section>
                <div>{messages.map((message) =><article key={message}><b> {message}</b></article>)}</div>
            </section>

        </>)
}

export default BerichtenOverview