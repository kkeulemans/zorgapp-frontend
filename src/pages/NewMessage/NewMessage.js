import NavBar from "../../components/NavBar/NavBar";
import Message from "../../components/message/Message";
import "./NewMessage.css"
import axios from "axios";
import {useState} from "react";

function NewMessage() {
    const token = localStorage.getItem("token");
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [selectedFile, setSelectedFile] = useState('');
    const [receiver, setReceiver] = useState('')
    const [receiverId, setReceiverId] = useState(0);
    const sender = localStorage.getItem("id");

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


    async function addAttachment(token, messageId, data) {
        try {
            await axios.post(`http://localhost:8080/messages/${messageId}/attachment`, {
                data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });


        } catch (e) {
            console.error(e)
        }
    }

    async function addToSender(messageId, senderId, token) {

        try {
            await axios.put(`http://localhost:8080/account/${senderId}/message/${messageId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        } catch (e) {
            console.error(e);
        }

    }

    async function findReceiver(receiver, token) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${receiver}/account`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            setReceiverId(response.data.id)
            addToReceiver(receiverId, receiverId, token)
        } catch (e) {
            console.error(e);
        }
    }

    async function addToReceiver(receiverId, messageId, token) {
      if(receiverId > 0){ try {
            await axios.put(`http://localhost:8080/account/${receiverId}/message/${messageId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        } catch (e) {
            console.error(e);
        }
    }}

async function sendMessage(token, data) {
        try {
            const response = await axios.post("http://localhost:8080/messages/new", {
                title: title,
                body: content,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const id = response.data.id

            addAttachment(token, id, data);
            addToSender(id, sender, token);
            findReceiver(receiver, token)

        } catch (e) {
            console.error(e);
        }
    }

    async function submitHandler(e) {
        e.preventDefault();
        const image = await convertToBase64(selectedFile)
        sendMessage(token, image);


    }

    return (
        <>
            <NavBar/>

            <Message placeholder="Bericht intypen..." content={content}
                     title={title} submitHandler={submitHandler}
                     setContent={(e) => setContent(e.target.value)}
                     setTitle={(e) => setTitle((e.target.value))}
                     setFile={(e) => setSelectedFile(e.target.files[0])} receiver={receiver}
                     setReceiver={(e) => setReceiver(e.target.value)}
            />
        </>
    )
}

export default NewMessage;