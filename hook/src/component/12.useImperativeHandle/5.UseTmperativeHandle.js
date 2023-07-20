// Incase we need to customize ref. Here come use of useImperativeHandle hook.
// custome ref entirely, without relating to component.
// create custome value of ref.current ==> {current: custome_value}

import React,{ useRef, useState, useImperativeHandle, useEffect } from "react"

const UseImperativeHandle_1 = () => {
  const [inputState, setInput] = useState("")
  const inputRef = useRef("1")

  return (
    <div>
      <CustomeInputComponent value={inputState}  onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
      {/* <button onClick={()=>inputRef.current.focus()}>Focus</button> */}
      {/* <button onClick={()=> console.log(inputRef)}>Focus</button> */}
      {/* <button onClick={()=> console.log(inputRef.current)}>Focus</button> */}
      {/* <button onClick={()=> console.log(inputRef.current.alertHi)}>Focus</button> */}
      <button onClick={()=> inputRef.current.alertHi()}>Focus</button>
    </div>
  )
}
export default UseImperativeHandle_1

const CustomeInputComponent = React.forwardRef((props,ref) => {
  useImperativeHandle(ref, ()=>{
    return {alertHi: ()=>alert("Hi")}
  }, [])
  return <input type="text"/>
})
