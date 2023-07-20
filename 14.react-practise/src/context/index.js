import React from "react";

export const contextState = {
 themes : {
    dark:"dark"
},
name: "Amir",
nameChanger: ()=>{
    console.log('click', contextState.name )
    contextState.name = 'Ok'
    console.log('click', contextState.name )
}
}
export const ThemeContext = React.createContext();