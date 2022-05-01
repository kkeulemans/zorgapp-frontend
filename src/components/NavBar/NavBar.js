import {NavLink} from "react-router-dom";
import './NavBar.css'
import logo from "C://Users/karli/WebstormProjects/zorgappkeulemans/src/assets/logo.png"
import {useContext} from "react";
import  {AuthContext} from "../../context/AuthContext";
import AuthContextProvider from "../../context/AuthContext";

function NavBar({authenticated, handleClick}) {
const { logout } = useContext(AuthContext);
    return (
        <>


            <header className="nav-container">

                <img className="logo" src={logo}/>
                <h4><NavLink className="nav" exact to="/" activeClassName="active-link">Home</NavLink></h4>
                <h4><NavLink className="nav" to="/berichten" activeClassName="active-link">Berichten</NavLink></h4>
                <h4><NavLink className="nav" to="/profile" activeClassName="active-link">Profiel</NavLink></h4>
                <h4><NavLink className="nav" to="" activeClassName="active-link">Instellingen</NavLink>
                </h4>
                <h4><NavLink className="nav" exact to="/appointment" activeClassName="active-link">Afspraak
                    Maken</NavLink></h4>
                    <button onClick={logout}>Log uit</button>

            </header>
        </>
    )
}

export default NavBar;