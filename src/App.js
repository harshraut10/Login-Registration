import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
//localStorage.setItem('isLogIn',false);

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    let logCheck=localStorage.getItem('isLogIn');
      if(logCheck==='1'){
        setIsLoggedIn(true);
      }
  },[]);


  const logOutHandler=()=>{
    setIsLoggedIn(false);
    localStorage.setItem('isLogIn', '0');   
  
  }

  const logInHandler=(id)=>{
    setIsLoggedIn(true);
    localStorage.setItem('isLogIn', '1');
    localStorage.setItem('userId',id);
    
  }


  return (
    <div className="App">
     { isLoggedIn && <Home logOut={logOutHandler}/>}
     {!isLoggedIn && <Login logIn={logInHandler} />}
    </div>
  );
}

export default App;
