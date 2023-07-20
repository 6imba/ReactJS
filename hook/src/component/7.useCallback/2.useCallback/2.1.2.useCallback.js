import React, { useState, useCallback, useEffect } from 'react'

const UseCallbackComponent_6 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [input,setInput] = useState(1)
    const [bgColor,setBgColor] = useState(false)
    // const listArr = () => [input, input+1, input+2]
    const listArr = useCallback(() => [input, input+1, input+2], [input]) // fix reference function using useCallback hook
    console.log(listArr())
    return (
        <>
            <input type="text" onChange={(e)=>{setInput(Number(e.target.value))}} value={input}/>
            <div style={{width:"165px", background: bgColor?"grey":"white"}}>
                <button onClick={()=>{setBgColor(!bgColor)}}>Toggle theme</button>
                <ListComponent listArr={listArr}/>
            </div>
        </>
    )
}

const ListComponent = React.memo(({listArr}) => {
    useEffect(() => {
        console.log("List component render side effect!")
    })
    console.log("List render.")
    const list = listArr().map((item,index)=> <p key={index}>{item}</p> )
    return list;
})

export default UseCallbackComponent_6

// here only parent component gets re-render, as child component is wrapped inside React.memo, it not render as its dependencies in not chnaged.