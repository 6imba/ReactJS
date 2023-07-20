// Access CustomeReactComponent with useRef.

import { useRef, useState } from "react"

const UseRefCustomeComponent_1 = () => {
  const [inputState, setInput] = useState("")
  
  const inputRef = useRef()
  
  return (
    <div>
      <CustomeInputComponent inputState={inputState} setInput={setInput} inputRef={inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </div>
  )
}

const CustomeInputComponent = ({inputState,setInput,inputRef}) => {
  return <input type="text"  value={inputState} onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
}
export default UseRefCustomeComponent_1

// Access HTML element inside CustomeReactComponent with useRef passing as props.
