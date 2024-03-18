import React,{useReducer, useState} from "react";
import Todo from "./Todo";

export const ACTIONS ={
    ADD_TODO : 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo'
}


function reducer(todos,action){
    switch (action.type) {
        case ACTIONS.ADD_TODO:
        return [...todos,newTodo(action.payload.name)]
            break;
        case ACTIONS.TOGGLE_TODO:
        return todos.map(todo =>{
            if (todo.id === action.payload.id) {
                return {...todo,complete: !todo.complete}
            }
            return todo
        })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
            break;
    }
}

function newTodo(name){
    return {id : Date.now(), name: name, complete : false}
}

export default function ReducerTodos(){

    const [todos,dispatch] = useReducer(reducer, [])
    const [name,setName] = useState('');

    function handleSumbit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName('');
    }

    console.log(todos);

    return (
      <>
      <form onSubmit={handleSumbit}>
          <input type="text" value={name} onChange={e => 
            setName(e.target.value)} />
      </form>

      {todos.map(todo => {
           return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
      </>
    )
}