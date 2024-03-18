import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';

function countInitial(){
  console.log('run function ')
  return 4;
}

function App() {


  //** *use hooks in function class */
    //** *use hooks used in specfic order can't be nested - top level cal at the beginning*/
    //** setState function = Use function Methods to update state => new state */
    /** use state two ways of initlizle useState(4) hard code */
    
    //const [count,setcount] =  useState(countInitial());
    
    //const [count,setcount] =  useState(() =>  countInitial())


    /* use object use ...Object name to use prev object values*/

    const [count,setstate] =  useState(4);
    const [theme,settheme] =  useState('blue');
    // const count = state.count;
    // const theme = state.theme;
    function decrementCount(){
      setstate(prevState =>  prevState - 1 );
      settheme('red')
    }

    function InrementCount(){
      //setstate(prevcount => prevcount +1);
      setstate(prevState => prevState + 1);
      settheme('green')
   
    }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={InrementCount}>+ </button>
    </>
  );
}

export default App;
