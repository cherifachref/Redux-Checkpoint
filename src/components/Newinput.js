
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, updateTask,deleteTask } from '../redux/actions'


function Newinput({id,text,done}) {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    return (
        <div>
            <div style={{backgroundColor:'#CED1F2'}}> <p> {text}  </p><button onClick={()=>dispatch(deleteTask(id))}>DELETE</button> <button onClick={()=>dispatch(doneTask(id))}> done </button> <input  onChange={(e)=>setInput(e.target.value)} type="text" /> <button onClick={()=>dispatch(updateTask(id,input))} > submit </button>   </div>
        </div>
    )
}

export default Newinput
