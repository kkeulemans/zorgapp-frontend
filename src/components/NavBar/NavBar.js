import {NavLink} from "react-router-dom";
import './NavBar.css'
import logo from "C://Users/karli/WebstormProjects/zorgappkeulemans/src/assets/logo.png"

function NavBar(){

    return(

        <nav>

        <div className="nav-container">
            <ul>
                <img className="logo" src={logo}/>
                <li id="home">
                    <h4><NavLink className="nav" exact to="/" activeClassName="active-link">Home</NavLink>
                    </h4>
                </li>
                <li id="berichten"> <h4><NavLink className="nav" to="/berichten" activeClassName="active-link">Berichten</NavLink></h4></li>
                <li id="profile"><h4><NavLink className="nav" to="/profile" activeClassName="active-link">Profiel</NavLink> </h4></li>
                <li id="instellingen"><h4><NavLink className="nav" to="/instellingen" activeClassName="active-link">Instellingen</NavLink></h4></li>
                <li id="appointment"><h4><NavLink className="nav" exact to="/appointment" activeClassName="active-link">Afspraak Maken</NavLink></h4></li>
            </ul></div>
    </nav>
    )
}

export default NavBar;