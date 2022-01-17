import React from 'react'
import { useSelector } from 'react-redux'


function Task() {
    const {tasks} = useSelector(state => state)
    return (
        <div>
            <h1>All TASK</h1>
            <div style={{color:'red',fontSize:18,fontStyle: 'italic'}}>{tasks.map(el=><div>{el.text}</div>)}</div>
            <h1>--------</h1>
        </div>
    )
}

export default Task
