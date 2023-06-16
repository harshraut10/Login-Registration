import classes from '../Login/Login.module.css';
import classes1 from './Register.module.css';
import React,{useState} from 'react';
import Card from '../Card/Card';
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
    return (<div>
        <h1>This is registration site</h1>
        <Card className={classes1.regis}>

        <form onSubmit={handler}>
        <label className={classes.label}>Enter email</label><br/>
            <input className={classes.input} onChange={onChangeEmail} type='text'></input><br/>
            <label className={classes.label}>Enter Password</label><br/>
            <input className={classes.input} onChange={onChangePw} type='text'></input><br/>
            <input type='submit'></input>
        </form>
        <input type='button' onClick={backHandler} value ='back'></input>
        
        </Card>
    </div>)
}

export default Register;