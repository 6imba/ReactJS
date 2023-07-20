import React, { useState, useMemo } from 'react'

const UseCallbackComponent_5 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [input,setInput] = useState(1)
    const [bgColor,setBgColor] = useState(false)

    return (
        <>
            <input type="text" onChange={(e)=>{setInput(Number(e.target.value))}} value={input}/>
            <div style={{width:"165px", background: bgColor?"grey":"white"}}>
                <button onClick={()=>{setBgColor(!bgColor)}}>Toggle theme</button>
                <ListComponent input={input}/>
            </div>
        </>
    )
}

const ListComponent = React.memo((props) => {
    console.log("List render.")
    return <p>{props.input}</p>
})

export default UseCallbackComponent_5