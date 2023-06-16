import Card from '../Card/Card';
import classes from './Login.module.css';
import React ,{useState} from 'react';
import Register from '../Register/Register';
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
                alert('match');
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
        {isRegistered && <Register rval={registerHandlerRemover}/>}
        <h1>This is Login page</h1>
        <Card className={classes.login}>
        <form onSubmit={handler}>
            <label className={classes.label}>Enter email</label><br/>
            <input className={classes.input} onChange={onChangeEmail} type='text'></input><br/>
            <label className={classes.label}>Enter Password</label><br/>
            <input className={classes.input} onChange={onChangePw} type='text'></input><br/>
            <input type='submit'></input>
        </form>
        <input type='button' onClick={registerHandler} value='register'></input>
        </Card>
    </div>)
}
export default Login;