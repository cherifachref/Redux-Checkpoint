

const initState={
    tasks:[]
}

export const reducer=(state=initState,action)=>{
    switch (action.type) {
        case "ADD_NEW_TASK":
            return {tasks:[...state.tasks,action.payload]}
        case "TASK_DONE" :
            return {tasks:state.tasks.map(el=> el.id=== action.payload ? {...el,done:!el.done} : el)}
        case "UPDATE_TASK" : 
            return {tasks:state.tasks.map(el=> el.id=== action.payload.id ? {...el,text:action.payload.task} : el)}
        case "DELETE_TASK" :
            return {tasks:state.tasks.map(el=> el.id=== action.payload ? {...el,del:!el.del} : el)}
        default:
            return state
    }
}