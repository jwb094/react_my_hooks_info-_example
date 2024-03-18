import React,{useState} from 'react'

export const ThemeContext = React.createContext();
export default  function Context () {

const [darktheme,setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

  return (
    <>
    <ThemeContext.Provider>    
        <button onClick={toggleTheme}>Toggle</button>
        </ThemeContext.Provider>
    </>
  )
}

