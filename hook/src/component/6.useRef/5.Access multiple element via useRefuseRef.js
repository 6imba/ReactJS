// but what if we need to access multiple element
  
import { useEffect, useRef, useState } from "react"

const UseRefComponent_5 = () => {
  const [inputState, setInput] = useState("")
  const inputRef = useRef()
  const paraRef = useRef()
  const buttonRef = useRef()
  console.log(inputRef)
  console.log(paraRef)
  console.log(buttonRef)
  useEffect(()=>{
    console.log(inputRef)
    console.log(paraRef)
    console.log(buttonRef)
  })
  return (
    <div>
      <input type="text" value={inputState} onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
      <p ref={paraRef}>Para 1</p>
      <button ref={buttonRef}>Button</button>
    </div>
  )
}

export default UseRefComponent_5

