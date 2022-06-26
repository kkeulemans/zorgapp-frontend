import React from "react";
import './Message.css'

function Message({submitHandler, title, content, placeholder, setContent, setTitle, receiver,setReceiver, setFile}) {


    return (
        <>

            <article id= "message-container">
                <form id="message" onSubmit={submitHandler}>

                    <p id="receiver">Naar: <input type="text" value={receiver} onChange={setReceiver} /></p>

                      <section id = "body">  <textarea id="message-title" value={title} placeholder="Bericht Titel" cols="50" rows="1"
                                  onChange={setTitle}/>

                          <textarea id="message-content" cols="50" rows="20" placeholder={placeholder}
                                    value={content} onChange={setContent}/></section>
                        <div id="upload"><input type="file" id="file" onChange={setFile}/></div>
                      <div id="send"> <button type="submit">Stuur</button></div>


            </form>

            </article>

        </>
    )
}

export default Message;