import zorgapp from "C:/Users/karli/WebstormProjects/zorgappkeulemans/src/assets/zorgapp.png";
import './HomePage.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
function HomePage(){

    async function fetchUserData() {
        try{
            const response = await axios.get("http://localhost:8080/users",{ headers: {
                "Content-Type": "application/json",
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsaWx5IiwiZXhwIjoxNjUxNzA1NzY4LCJpYXQiOjE2NTA4NDE3Njh9.WZvwgMd2pGCCDgiSxHT0jTrcxonuA_0ccGDbfarKVbI`,
            }})
        }
        catch (e) {
            console.error(e);

            if (e.response.status === 500) {
                console.log('De server deed het niet');
            } else if (e.response.status === 404) {
                console.log('De developer heeft iets doms gedaan in het request');
            } else {
                console.log('Het ging mis. Geen idee wat.');
            }
        }
    }

    fetchUserData();
    return(
        <>
            <section>

                <img src={zorgapp} alt="ZorgApp logo"/>

                <div className="links">
                <button  className="link"><h4><NavLink to="/login"  activeClassName="active-link" >Login</NavLink></h4></button>
                <button className="link"><h4><NavLink className="nav" to="/register"  activeClassName="active-link"> Registreer</NavLink></h4></button>
            </div>
            </section>
        </>
    )
}
export default HomePage