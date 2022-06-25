import React, {useContext, useState} from "react";
import './App.css';
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import {Route, Switch} from 'react-router-dom'
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import AppointmentPage from "./pages/Appointment/AppointmentPage"
import BerichtenOverview from "./pages/MessageOverview/BerichtenOverview"
import zorgapp from "./assets/zorgapp.png";
import HomePage from "./pages/HomePage/HomePage";
import {AuthContext} from "./context/AuthContext";
import MessageOverview from "./pages/MessageOverview/BerichtenOverview";
import NewMessage from "./pages/NewMessage/NewMessage";
import Message from "./pages/Message/Message";
import PrivateRoute from "./components/PrivateRoute";
function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                <SignIn  />
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <PrivateRoute path="/message" boolean={isAuth} children=<NewMessage/>/>
                <PrivateRoute exact path="/berichten" boolean={isAuth} children=<MessageOverview/>/>
                <PrivateRoute path="/messages/:messageId" boolean={isAuth} children=<Message/>/>
                <PrivateRoute path="/appointment" boolean={isAuth} children=<AppointmentPage/>/>
                <PrivateRoute path="/profile" boolean={isAuth} children=<Profile/>/>

            </Switch>
        </>
    );
}

export default App;
