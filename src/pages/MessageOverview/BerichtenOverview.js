import './BerichtenOverview.css'
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import NavBar from "../../components/NavBar/NavBar";
import "./BerichtenOverview.css"
import {Link} from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import clippy from "../../assets/clippy.png"

function BerichtenOverview() {
    const token = localStorage.getItem("token");
    let array = [];
    const [messages, setMessages] = useState([]);
    const [idList, setIdList] = useState([])
    const account = localStorage.getItem("id");
    useEffect(() => {
        async function getMessages(account, token) {

            try {
                const response = await axios.get(`http://localhost:8080/${account}/messages`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const messageList = response.data;

                const ids = messageList.map((message) => {
                    return message.id
                })
                setMessages(messageList);
                setIdList(ids);
            } catch (e) {
                console.error(e)
            }
        }

        getMessages(account, token);
    }, [account]);

    const titles = messages.map((message) => <section key={message.title}><b>
        <Link to={`/messages/${message.id}`}>{message.title}</Link></b><p>Afzender</p></section>)
    return (
        <>
            <NavBar/>
            <p></p>
            <h3>Bericht Overzicht</h3>
            <article id="overview">

                    {titles}
                <Buttons text="Nieuw Bericht" path={"/message"}/>
            </article>
        </>)
}

export default BerichtenOverview