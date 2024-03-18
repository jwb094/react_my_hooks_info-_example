import React,{useState,useMemo, useEffect} from 'react'

/*
useMemo = cache value to not recompute ut
perfromance overhead issue
increase memor/cahe size = performance issue
*/
export default function Memos (){


  const [number,setNumber] = useState(0)
  const [dark,setDark] = useState(false)
  const doubleNumber = useMemo(() => {
  return slowFunction(number)//cache value 
  , [number]})

  const themeStyles = useMemo(() => { //referential equality  
    /*
    check the ref of object/array is the same to lastrendser value 
    */
   
   return { 
      backgroundColor: dark ? 'black':'white' ,
      color: dark ? 'white':'black'  
  }
  },[dark])

  useEffect(()=>{
    console.log('theme changed')

    
  },[themeStyles])

  return (
    <>
      <input type="number"  value={number} onChange={e =>
      setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber} </div>
    </>
 
  )
}

function slowFunction(num){
 // console.log('calling Slow function');
  for (let i = 0; i < 100000000000; i++) {
   return num *2;
  }
}