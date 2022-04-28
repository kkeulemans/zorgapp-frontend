import React from "react";
import './Message.css'
import NavBar from "../NavBar/NavBar";
function Message ({submitHandler,title, content, placeholder, setContent, setTitle,file,setFile}){
    return(
        <>
            <section>
            <form onSubmit={submitHandler}>

                <textarea id="title" value={title} placeholder="Bericht Titel" cols="100" rows="5" onChange={setTitle}/>
                <textarea id="message" cols="100" rows="70" placeholder={placeholder}
                          value={content} onChange={setContent}/>
                <button type="submit" >Stuur</button>
                <input type="file" value={file} onChange={setFile}/>


            </form>


            </section>
        </>
    )
}
export default Message;