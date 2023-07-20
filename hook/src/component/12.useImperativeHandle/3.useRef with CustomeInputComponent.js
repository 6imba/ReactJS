// Access CustomeReactComponent with useRef.

import { useRef, useState } from "react"

const UseRefCustomeComponent_2 = () => {
  const [inputState, setInput] = useState("")
  
  const inputRef = useRef()
  
  return (
    <div>
      <CustomeInputComponent value={inputState}  onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </div>
  )
}

const CustomeInputComponent = () => {
  return <input type="text"/>
}
export default UseRefCustomeComponent_2

// Access directly CustomeReactComponent with useRef.
// Warning: Function components cannot be given refs. 
// Attempts to access this ref will fail. Did you mean to use React.forwardRef()