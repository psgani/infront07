import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/notesstate';
import {
  Route,
  Routes
} from "react-router-dom";
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import EmailVerify from './components/EmailVerify';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return(

    <>
      <NoteState>
        <Navbar/>
        <Alert alert = {alert}/>
        <div className="container">
          <Routes>
            <Route path = '/' element = {<Home showAlert = {showAlert}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/login' element = {<Login showAlert = {showAlert}/>}/>
            <Route path = '/signup' element = {<Signup showAlert = {showAlert}/>}/>
            <Route path = '/users/:id/verifhy/:token' element={<EmailVerify/>}/>
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App;

