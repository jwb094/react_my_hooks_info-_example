import React,{useState,useEffect,useRef} from 'react'

function Ref (){
const [name,setName] = useState('');
const rendercount = useRef(0);
const prevName = useRef('');


useEffect(() => {
  prevName.current = name
}, [name])

// function focus (){
//  inputRef.current.focus()
// }
    // useEffect(()=>{
    // rendercount.current = rendercount.current + 1;
    // })
    // console.log(rendercount);
    //Ref  similair to state- it persists between renders =>doens;'t cause compoenent to reload 
    //use ref inside HTML elements

    //never use Ref to management compoent awlays use state/props
    //store previous value of state
  return (
  <>
  <input type="text" onChange={e => setName(e.target.value)} />
  <div> My Name is {name} and it used  to be {prevName.current}</div>
  {/* <button onClick={focus}>Focus</button> */}
  {/* <div> I render {rendercount.current} times</div> */}
  </>
  )
}

export default Ref