import Form from "./Form";
import ListNotes from "./ListNotes";
import { useState } from "react";
import './Home.css';
const dummy=[""]
const Home=(props)=>{

    
    const [listArray,setListArray]=useState(dummy);

    const flushList =(list)=>{
        setListArray((prev) => {
            return [list, ...prev];
          });
        
    }
   
        
    

    const logOutHandler=()=>{
       props.logOut();
    }
    //const arr=["bring sign of acc","do ai hw","go to watch movie"];




    return <div >
        <h1>This is home Page</h1>
        <Form flush={flushList}/><br/>
        <button type='button' onClick={logOutHandler}>LogOut</button>
        <ListNotes array={listArray}/>
    </div>
}
export default Home;