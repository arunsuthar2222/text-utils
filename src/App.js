import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink
// } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [alert, setAlert] = useState();
  // const deleteAlert = ()=>{
  //   setAlert()
  // }

  const showAlert = (text, color) =>{
setAlert({text: text, color: color})
setTimeout(()=>{
  setAlert()
},2000)
  }
  
  const changeMode =(e) => {
    if(e.target.textContent === "Light Mode"){
      e.target.textContent = "Dark Mode"
      showAlert('Light mode has on', 'green')
      document.title = "TextUtils - Light Mode"
      document.getElementsByTagName('html')[0].classList.toggle('dark')
    }
    else if(e.target.textContent === "Dark Mode"){
      e.target.textContent = "Light Mode"
      showAlert('Dark mode has on', 'green')
      document.title = "TextUtils - Dark Mode"
      document.getElementsByTagName('html')[0].classList.toggle('dark')
    }
  }
  

  return (
    <>
    
    <Navbar title = "TextUtils" changeMode={changeMode}/>
    <Alert alert={alert}/>
    <div className="mx-4 md:mx-0">
    <TextForm showAlert={showAlert}/>
   </div>

</>
  );
}

export default App;
