import React from "react";
import './Message.css'

function Message({submitHandler, title, content, placeholder, setContent, setTitle, receiver,setReceiver, setFile}) {


    return (
        <>

            <article>
                <form onSubmit={submitHandler}>

                       Naar: <input type="text" value={receiver} onChange={setReceiver} />

                        <textarea id="message-title" value={title} placeholder="Bericht Titel" cols="60" rows="4"
                                  onChange={setTitle}/>

                          <textarea id="message-content" cols="60" rows="50" placeholder={placeholder}
                                        value={content} onChange={setContent}/>
                        <input type="file" id="file" onChange={setFile}/>
                        <button type="submit">Stuur</button>


                </form>

            </article>

        </>
    )
}

export default Message;