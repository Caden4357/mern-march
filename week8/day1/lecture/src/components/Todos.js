import React, {useState, useReducer} from 'react';



// !             State,  object
const reducer = (todos, action) => {
    console.log(`TODOS: ${todos}`);
    // console.log(`ACTION: ${JSON.stringify(action)}`);
    console.log('PAYLOAD', action.payload);
    console.log('PAYLOAD TODO', action.payload.todo);
    switch(action.type){
        case 'ADD_TODO':
            return [...todos, action.payload.todo]
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState('')
    const [todoList, dispatch] = useReducer(reducer, [])

    const submitTodo = (e) => {
        e.preventDefault();
        // calling reducer function 
        // passing in an object that will be referred to as action inside of reducer
        dispatch({type:'ADD_TODO', payload:{todo:todo}})
    }

    return (
        <div>
            <h1>UseReducer</h1>
            <form onSubmit={submitTodo}>
                <label>Todo: </label>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Add Todo</button>
            </form>
        </div>
)}

export default Todos;