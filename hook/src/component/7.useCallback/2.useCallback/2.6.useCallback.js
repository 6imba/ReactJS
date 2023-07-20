import React, { useState, useCallback } from 'react'

const UseCallbackComponent_6 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [bgColor,setBgColor] = useState(false)

    // const listArr = useCallback(() => "hi") // reference change re-render
    const listArr = useCallback(() => "hi",[]) // reference change re-render // [] consist of dependencies to change reference
    // const listArr = 1; //no reference change no re-render
    // const listArr = "amir"; //no reference change no re-render
    // const listArr = true; //no reference change no re-render
    // const listArr = [1,2,3,4,5,6]; // reference change re-render
    // const listArr = {a:1,b:2,c:3}; // reference change re-render

    return (
        <>
            <div style={{width:"165px", background: bgColor?"grey":"white"}}>
                <button onClick={()=>{setBgColor(!bgColor)}}>Toggle theme</button>
                <ListComponent listArr={listArr}/>
            </div>
        </>
    )
}

const ListComponent = React.memo(({listArr}) => {
    console.log("List render.")
    return <div>Child component</div>
})

export default UseCallbackComponent_6