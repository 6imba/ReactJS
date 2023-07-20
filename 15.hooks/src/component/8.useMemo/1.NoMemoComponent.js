import React, { useState, useMemo } from 'react'

const UseCallbackComponent_5 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [input,setInput] = useState(1)
    const [bgColor,setBgColor] = useState(false)

    // const listArr = [input, input+1, input+2]
    // const listArr = useCallback(() => [input, input+1, input+2], [input])

    return (
        <>
            <input type="text" onChange={(e)=>{setInput(Number(e.target.value))}} value={input}/>
            <div style={{width:"165px", background: bgColor?"grey":"white"}}>
                <button onClick={()=>{setBgColor(!bgColor)}}>Toggle theme</button>
                {/* <ListComponent listArr={listArr}/> */}
                <ListComponent input={input}/>
            </div>
        </>
    )
}

const ListComponent = (props) => {
    console.log("List render.")
    // return props.listArr.map((item,index)=> <p key={index}>{item}</p> );
    return <p>{props.input}</p>
}

export default UseCallbackComponent_5