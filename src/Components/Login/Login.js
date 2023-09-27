
import  './Login.css';
import React ,{useState} from 'react';
import Register from '../Register/Register';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
const Login=(props)=>{
    const [isRegistered,setIsResgistered]=useState(false);
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPw,setEnteredPw]=useState('');

    async function handler(event){
        event.preventDefault();
        console.log(enteredEmail);
        console.log(enteredPw);

      

        const response = await fetch('https://react-http-3c5ee-default-rtdb.firebaseio.com/Users.json');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        const loadedEmails=[];
        for(const key in data){
            loadedEmails.push({
            id:key,
            email:data[key].email,
            pw:data[key].pw
          })
        }
        console.log(loadedEmails)
        for(const ptr in loadedEmails){
            if(loadedEmails[ptr].email===enteredEmail && loadedEmails[ptr].pw===enteredPw){
                alert('Username and password matched with backend');
                console.log(loadedEmails[ptr].id)
                props.logIn(loadedEmails[ptr].id);
            }
        }
    }
    const onChangeEmail=event=>{
        event.preventDefault();
        setEnteredEmail(event.target.value);

        
    }

    const onChangePw=event=>{
        event.preventDefault();
        setEnteredPw(event.target.value);

        
    }
   

    const registerHandler=()=>{
        setIsResgistered(true)
    }

    const registerHandlerRemover=()=>{
        setIsResgistered(false);
    }

    return (
        
    <div>
        {isRegistered ? <Register rval={registerHandlerRemover}/> :
        
        <div className='container'>
      <h1 className='head'>This is Login Page</h1>
        <form onSubmit={handler}>
            <div className='inputs'>
            <div className='input'>
            <img src={email_icon} alt=''/>
            <input  onChange={onChangeEmail} type='text'></input><br/>
            </div>
            <div className='input'>
            <img src={password_icon} alt=''/>
            <input  onChange={onChangePw} type='text'></input><br/>
            </div>
            </div>
            
            <button type='submit' className='submit-btn' >Submit</button>
            <button className='submit-btn' onClick={registerHandler} >Register</button>
  
       ' </form>
       
 

        </div>
        
        }
        
    </div>
    )
}
export default Login;