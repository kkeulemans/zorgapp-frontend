import React from "react";
import './Message.css'
function Message ({submitHandler}){

    return(
        <>
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