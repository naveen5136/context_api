import React,{useState} from "react";
import "./style.css";
 import List from './List.js'

import Toggle from './Toggle.js'

 export const Themecontext=React.createContext()
 const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#171717",
    color: "#fff"
  }
};
export default function App() {
  const[theme,setTheme]=useState('light')

  function themeChange() {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className={`App theme-${theme}`}>
      <h1>Hello StackBlitz!</h1>
      <Themecontext.Provider value={{theme=themes[theme],themeChange}}>
      
      <Toggle /> 
    
      </Themecontext.Provider >
      <p >
      {new Array(10).fill(5).map((x, i) => (
        <List key={i} />
      ))}
    </p>
    </div>
  );
}
