// Access CustomeReactComponent with useRef and React.forwardRef

import React,{ useRef, useState } from "react"

const ReactForwardRef = () => {
  const [inputState, setInput] = useState("")
  const inputRef = useRef()

  return (
    <div>
      <CustomeInputComponent value={inputState}  onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </div>
  )
}
export default ReactForwardRef

// const CustomeInputComponent = React.forwardRef(() => {
//   return <input type="text"/>
// })

// Access CustomeReactComponent with useRef and React.forwardRef,
// It remove the Warning: Function components cannot be given refs. 
// but it still doesn't doest access the component. ==> Uncaught TypeError: Cannot read properties of undefined (reading 'focus')
// so for that we need to pass second property(ref) to our custome component.

const CustomeInputComponent = React.forwardRef((props,ref) => {
  return <input type="text" ref={ref}/>
})

// You see problem solved.
// Here, we are forwarding the ref passed into custome_component into the HTML element inside it(custome_component). 
// This is all fine if we need to (pass a single ref into the Custome component) or (assign ref to html element inside Customecomponent directly from Component call).
// But incase we need to pass custome ref. Here come use of useImperativeHandle.

