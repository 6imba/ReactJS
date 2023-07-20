import { useState, useCallback } from 'react'

const UseCallbackComponent_6 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [input,setInput] = useState(1)
    const [bgColor,setBgColor] = useState(false)
    const listArr = useCallback(() => [input, input+1, input+2], [input])
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

const ListComponent = ({listArr}) => {
    console.log("List render.")
    const list = listArr().map((item,index)=> <p key={index}>{item}</p> )
    return list;
}

export default UseCallbackComponent_6