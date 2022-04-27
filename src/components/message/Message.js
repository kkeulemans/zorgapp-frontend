import React from "react";
import './Message.css'
import NavBar from "../NavBar/NavBar";
function Message ({submitHandler}){
    return(
        <>
            <NavBar/>
            <section>
            <form onSubmit={submitHandler}>


                <textarea id="message" cols="100" rows="70" placeholder="Typ hier uw bericht" ></textarea>
            </form>

            <button type="submit"  onSubmit={submitHandler}>Stuur</button>
            </section>
        </>
    )
}
export default Message;