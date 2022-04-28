import React, {useContext, useState} from "react";
import logo from './logo.svg';
import './App.css';
import Message from "./components/message/Message";
import Button from "./components/Buttons";
import Input from "./components/Input";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import {Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router-dom";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar/NavBar";
import AppointmentPage from "./pages/Appointment/AppointmentPage"
import BerichtenOverview from "./pages/MessageOverview/BerichtenOverview"
import zorgapp from "./assets/zorgapp.png";
import HomePage from "./pages/HomePage/HomePage";
import Instellingen from "./pages/Instellingen/Instellingen";
import {AuthContext} from "./context/AuthContext";
import MessageOverview from "./pages/MessageOverview/BerichtenOverview";
import NewMessage from "./pages/NewMessage/NewMessage";
function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                <SignIn isAuth />
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/message">
                    <NewMessage/>
                </Route>
                <Route path="/berichten">
                    {/*BEVEILIGDE ROUTE*/}
                    <MessageOverview/>
                </Route>
                <Route path="/appointment">
                    <AppointmentPage/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/instellingen">
                    <Instellingen/>
                </Route>
                    <Route path="/messages/new">
                        <NewMessage/>

                </Route>
            </Switch>
        </>
    );
}

export default App;
