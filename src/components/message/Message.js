import React from "react";
import './Message.css'

function Message({submitHandler, title, content, placeholder, setContent, setTitle, receiver,setReceiver, setFile}) {


    return (
        <>

            <article>
                <form onSubmit={submitHandler}>
                    <p>
                       Naar: <input type="text" value={receiver} onChange={setReceiver} /></p>
                        <p>
                        <textarea id="message-title" value={title} placeholder="Bericht Titel" cols="80" rows="4"
                                  onChange={setTitle}/></p>

                    <p>       <textarea id="message-content" cols="80" rows="50" placeholder={placeholder}
                                        value={content} onChange={setContent}/></p>
                        <input type="file" id="file" onChange={setFile}/>
                        <p></p>
                        <button type="submit">Stuur</button>


                </form>

            </article>

        </>
    )
}

export default Message;