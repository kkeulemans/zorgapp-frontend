import {NavLink} from "react-router-dom";
import './NavBar.css'

function NavBar(){

    return(

        <nav>

        <div className="nav-container">
            <ul>
                <li>
                    <h4><NavLink className="nav" exact to="/" activeClassName="active-link">Home</NavLink>
                    </h4>
                </li>
                <li> <h4>Berichten</h4></li>
                <li><h4>Profiel</h4></li>
                <li><h4>Instellingen</h4></li>
                <li><h4><NavLink className="nav" exact to="/appointment" activeClassName="active-link">Afspraak Maken</NavLink></h4></li>
            </ul></div>
    </nav>
    )
}

export default NavBar;