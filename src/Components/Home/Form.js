
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Form(props){
    const [enteredList,setEnteredList]=useState("");
    const submitHandler=(event)=>{
        event.preventDefault()
        props.flush(enteredList);
        setEnteredList("");
    }

    const onChangeHandler=(event)=>{
        setEnteredList(event.target.value);
        
    }
    return(
        <form onSubmit={submitHandler}>
            <label>Post Notes</label><br/>
            <input type='text' onChange={onChangeHandler}/>
            <Button as="input" type="submit" value="Submit" />{' '}

            

        </form>
    )
}

export default Form;