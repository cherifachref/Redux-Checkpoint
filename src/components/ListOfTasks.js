import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doneTask, updateTask,deleteTask } from '../redux/actions'
import Newinput from './Newinput'


function ListOfTasks() {
    const dispatch = useDispatch()
    const {tasks} = useSelector(state => state)
    const [input, setInput] = useState("")
    return (
        <div>
            <h1> tasks done </h1>
            <p>                 
                {tasks.filter(el=>el.done).map(el=> <div style={{backgroundColor:'#86E97E'}} > <p style={{ textDecoration:"line-through"}}> {el.text}  </p> <button onClick={()=>dispatch(doneTask(el.id))} > not done yet </button>   </div> )}
</p>
            <h1> tasks not done yet </h1>
            <p>
                {tasks.filter(el=>!el.done && !el.del).map(el=>  <Newinput id={el.id} text={el.text} done={el.done}/>)}
            </p>
        </div>
    )
}

export default ListOfTasks
