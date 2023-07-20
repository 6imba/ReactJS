import { useState } from 'react'

const UseCallbackComponent_5 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [input,setInput] = useState(1)
    const listArr = [input, input+1, input+2] //its not function its just array_value
    return (
        <>
            <input type="text" onChange={(e)=>{setInput(Number(e.target.value))}} value={input}/>
            <ListComponent listArr={listArr}/>
        </>
    )
}

const ListComponent = ({listArr}) => {
    const [bgColor,setBgColor] = useState(false)

    console.log("List render.")
    console.log(listArr)
    const list = listArr.map((item,index)=> <p key={index}>{item}</p> )
    return(
        <div style={{width:"165px", background: bgColor?"grey":"white"}}>
            <button onClick={()=>{setBgColor(!bgColor)}}>Toggle theme</button>
            {list}
        </div>
    );
}

export default UseCallbackComponent_5