import React, { useState,useCallback } from 'react';
import List from'./list.js'
export default function Back() {
  
  const [number,setNumber] = useState(1);
  const [dark,setDark] = useState(false);


  const getItems = useCallback((incrementator) => {
      return[number+ incrementator,number + 1+ incrementator,number + 2+ incrementator]
  },[number])

  const theme = {

    backgroundColor:dark ? '#333':'#fff',
    color: dark ?'#fff' : '#333'
  }
  return (
    <div style={theme}>
        <input 
            value={number}
            type="number"
            onChange={e => setNumber(parseInt(e.target.value))}
             />
        <button onClick={() => setDark(prevDark => !prevDark)}> 
            Toggle Theme
        </button>
        <List getItems={getItems}/>
    </div>
  )
}
/**
 * useCallback similar ro useMemo function called when paramter has changed
 * useMEmo return value of the function / Usecallback returns the functions
 * use for referential eequality
 */