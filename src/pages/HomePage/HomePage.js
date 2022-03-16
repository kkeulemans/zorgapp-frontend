import zorgapp from "C:/Users/karli/WebstormProjects/zorgappkeulemans/src/assets/zorgapp.png";
import './HomePage.css'
import {NavLink} from "react-router-dom";
function HomePage(){
    return(
        <>
            <section>
            <img src={zorgapp}/>

                <h3><NavLink className="nav" to="/login"  activeClassName="active-link">Login</NavLink></h3>
                <h3><NavLink className="nav" to="/register"  activeClassName="active-link"> Registreer</NavLink></h3>
            </section>
        </>
    )
}
export default HomePage