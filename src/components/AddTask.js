import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../redux/actions'

function AddTask() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({text:''})
    return (
        <div>
            <label> Add task! </label>
            <input value={input.text} onChange={(e)=>setInput(e.target.value)}  type="text"/>
            
            <button onClick={()=>dispatch(addNewTask({text:input,done:false,del:false,id:Math.random()}))&&setInput({text:''})} > submit </button>
        </div>
    )
}

export default AddTask
