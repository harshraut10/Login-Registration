import  '../Login/Login.css';
import  './Register.css';
import React,{useState} from 'react';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Register = (props)=>{
    const [isRegistered,setIsResgistered]=useState(false);
    const [formIsValid,setFormIsValid]=useState(false);
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPw,setEnteredPw]=useState('');
    const [isEmailValid,setIsEmailValid]=useState(false);
    const [isPwValid,setIsPwValid]=useState(false);

     async function handler(event){
        event.preventDefault();
        console.log(enteredEmail);
        console.log(enteredPw);

        if(!isEmailValid || !isPwValid){
            alert('for is not valid');
            return;
        }

        if(isEmailValid && isPwValid){
            console.log("valid");
            //props.check(true);
        }

        console.log(formIsValid);
        
        
        const  userOb={
            id: Math.random().toString(),
            email:enteredEmail,
            pw:enteredPw
        }

        const responseCheck =await fetch("https://react-http-3c5ee-default-rtdb.firebaseio.com/Users.json");
        const data = await responseCheck.json();
        const loadedEmails=[];
        for(const key in data){
            if(userOb.email===data[key].email){
                alert('UserName already exists');
                return;
            }
        }

     const response =await fetch("https://react-http-3c5ee-default-rtdb.firebaseio.com/Users.json",{
      method:'POST',
      body:JSON.stringify(userOb)
    });
    if(response.ok){
        alert('Registered Succesfully !!')
    }


    }

    const onChangeEmail=event=>{
        event.preventDefault();
        if(event.target.value.includes('@'))
        {
        setEnteredEmail(event.target.value);
        setIsEmailValid(true);
        }

        
    }

    const onChangePw=event=>{
        event.preventDefault();
        if(event.target.value.trim().length > 6){
            setEnteredPw(event.target.value);
            setIsPwValid(true);
        }
       

        
    }

    const backHandler=()=>{
        props.rval();
    }
    return (
    <div className='container'>
        <h1 className='head'>This is registration site</h1>
        
        
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
        <button className='submit-btn' type='submit'>Submit</button>
        </form>
        
        <button className='submit-btn' onClick={backHandler} >Back</button>
    </div>)
}

export default Register;