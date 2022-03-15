import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Message from "./components/message/Message";
import Button from "./components/Buttons";
import Input from "./components/Input";
import Register from "./pages/Register/Register";

function App() {

    return (<>
        <Register/>
        <Message/>
</>
  );
}

export default App;
