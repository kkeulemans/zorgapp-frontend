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
import BerichtenOverview from   "./pages/BerichtenOverview/BerichtenOverview"
import zorgapp from "./assets/zorgapp.png";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                <Login isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/message">
                    <Message/>
                </Route>
                <Route path="/berichten">
                    {/*BEVEILIGDE ROUTE*/}

                </Route>
                <Route path="/appointment">
                    <AppointmentPage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
