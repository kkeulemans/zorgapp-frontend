import './BerichtenOverview.css'
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";


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
            <h3>Bericht Overzicht</h3>
            <section>
                <p>{messages.map((message) =><article key={message}> {message}</article>)}</p>
            </section>
            <section></section>

        </>)
}

export default BerichtenOverview