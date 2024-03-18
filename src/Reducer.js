import React,{useState,useReducer} from 'react'

const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state,action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
      case ACTIONS.DECREMENT:
        return {count: state.count - 1}
      default:
        return state
  }


}

export default function Reducer() {
  const [state,dispatch] = useReducer(reducer,{count: 0})
  //const [count,setCount] = useState(0);

  function increment(){
  //  setCount(prevCount => prevCount + 1)
  dispatch({type: ACTIONS.INCREMENT})
  }


  function decrement(){
    dispatch({type:ACTIONS.DECREMENT})
  }
    //setCount(prevCount => prevCount - 1)
  

  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>

  )
}


/* *
two return value
state = count 
Dispatch to update the state

useREducer Function and objects 
use object than values

state = state 
action = dispatch
reducer() return new state



useReducer 
usefull for more complex state/nested component
*/
