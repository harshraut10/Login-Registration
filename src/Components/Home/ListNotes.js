
import  './ListNotes.css';
const ListNotes=(props)=>{
    return(
        <div> 
            {
                props.array.map((ar,index)=>(
                    <p key={index} >{ar}</p>
                ))
            }
        </div>
    )
}

export default ListNotes