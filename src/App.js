//const puppeteer = require('puppeteer');

import logo from './imgs/logo.png';
import './App.css';


function Submit(){
  console.log("Hello world")
}

function App() {
  return (
    
    <div className="login">

      <img className="ish-logo" src={logo} alt="ISH Logo" ></img>

      <input className="username" onkeyup={usrKeyUp()} type="username" placeholder="Username"></input>
      <input className="password" onkeyup={passKeyUp()} type="password" placeholder="Password"></input>


      <svg  className="submit-btn" onclick={Submit()} viewBox="0 0 639 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M359.447 30.6251L359.447 30.625L365.645 36.8224L339.822 62.6447L333.625 56.4473L353.25 36.8224L333.625 17.1974L339.822 11L359.447 30.6251Z" fill="white"/>
        <rect x="288" y="32" width="71" height="9" fill="white"/>
      </svg>


    </div>

  );
}


function passKeyUp(event){
      
    if (event.keyCode === 13){
        event.preventDefault();
        Submit();
        
    }
  }



  function usrKeyUp(event){
    
    if (event.keyCode === 13){
        event.preventDefault();
        password.focus();
        
    }
  }




export default App;
