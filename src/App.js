import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Message from "./components/message/Message";
import Button from "./components/Buttons";
import Input from "./components/Input";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import {Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router-dom";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar/NavBar";
import AppointmentPage from "./pages/Appointment/AppointmentPage"

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <>
            <NavBar authenticated={isAuthenticated} toggle={toggleIsAuthenticated}/>
        <Switch>
        <Route exact path="/">
            <Login/>
        </Route>
           <Route path = "/register">
            <Register/>
           </Route>
           <Route path = "/message">
        <Message/>
           </Route>
            <Route path="/berichten">
                {/*BEVEILIGDE ROUTE*/}
                {isAuthenticated === true ? <Profile/> : <Redirect to="/" />}
            </Route>
            <Route path="/appointment">
                <AppointmentPage/>
            </Route>
        </Switch>
</>
  );
}

export default App;
