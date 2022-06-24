import axios from "axios";
import {useState} from "react";
import "./Message.css"
import {useHistory, useParams} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


function Message() {
    const token = localStorage.getItem("token");
    const {messageId} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageId, setImageId] = useState(0);
    const [image, setImage] = useState();
    const history = useHistory();

    const download = (url) => {
        var element = document.createElement("a");
        var file = new Blob(
            [
                `${url}`
            ],
            {type: "image/*"}
        );
        element.href = URL.createObjectURL(file);
        element.download = "image.jpg";
    };

    async function getMessages(id, token) {
        try {
            const response = await axios.get(`http://localhost:8080/messages/${id}`, {
                headers: {
                    "Content-Type": "multipart/form-data; boundary=&",
                    Authorization: `Bearer ${token}`,
                },

            })
            setTitle(response.data.title)
            setContent(response.data.body)
        } catch (e) {
            console.error(e)
        }
    }

    async function getAttachmentId(id, token) {
        try {
            const response = await axios.get(`http://localhost:8080/messages/${id}/attachment`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })


            setImageId(response.data.id);
            localStorage.setItem("imageId", imageId);

        } catch (e) {
            console.error(e);
        }
    }

    const imaged = localStorage.getItem("imageId");


    async function retrieveAttachment(id, token) {
        if (id > 0) {
            try {
                const response = await axios.get(`http://localhost:8080/images/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    })

                setImage(response.data.data)

            } catch (e) {
                console.error(e);
            }
        }
    }

    getMessages(messageId, token)
    getAttachmentId(messageId, token)
    retrieveAttachment(imaged, token)


    function clickHandler() {
        history.push("/message/new")
    }

    return (
        <>
            <NavBar/>
            <article>
                <h4 className="message"><u>{title}</u></h4>
                <p className="message">{content}</p>
                <ul>
                    <li className="message"></li>
                </ul>
                <img src={image} alt="foto van client"/>
                <a href={image} download="" onClick={download(image)}>Download image</a>

            </article>

            <button type="submit" onClick={clickHandler}>Antwoord</button>
        </>
    );
}

export default Message;