import NavBar from "../../components/NavBar/NavBar";
import Message from "../../components/message/Message";
import axios from "axios";
import {useState} from "react";

function NewMessage() {
    const token = localStorage.getItem("token");
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [selectedFile, setSelectedFile] = useState([]);
    const formData = new FormData();

    async function sendMessage(token){
        try{
           const response =  await axios.post("http://localhost:8080/messages/new", {
                title: title,
                body: content,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            formData.append("file", selectedFile);
            const id = response.data.id + 1
            console.log(id);
            addAttachment(token, id);
        }
        catch (e){
            console.error(e);
        }
    }

    async function addAttachment(token,messageId){
        await axios.post(`http://localhost:8080/messages/${messageId}/attachment`, {
            formData
        }, {
            headers: {
               // "Content-Type": "multipart/form-data; boundary=&",
                Authorization: `Bearer ${token}`,
            },
        })
    }

    function submitHandler(e){
        e.preventDefault();


        console.log(title);
        console.log(content);
        console.log(selectedFile)
        sendMessage(token);

    }
    return (
        <>
        <NavBar/>

                <Message placeholder="Bericht intypen..." content={content}
                         title={title} submitHandler={submitHandler}
                         setContent={(e) => setContent(e.target.value)}
                         setTitle={(e) => setTitle((e.target.value))}
                         //file={selectedFile}
                         setFile={(e) => setSelectedFile(e.target.files[0])}
                />
            </>
    )
}

export default NewMessage;