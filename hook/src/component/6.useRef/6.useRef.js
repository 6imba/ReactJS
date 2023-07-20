// but what if we need to access multiple element
  
import { useEffect, useRef, useState } from "react"

const UseRefComponent_6 = () => {
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

  const setBg = () => {
    inputRef.current.style.backgroundColor = "red"
    paraRef.current.style.backgroundColor = "blue"
    buttonRef.current.style.backgroundColor = "green"
  }
  
  return (
    <div>
      <input type="text" value={inputState} onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
      <p ref={paraRef}>Para 1</p>
      <button ref={buttonRef} onClick={setBg}>Button</button>
    </div>
  )
}

export default UseRefComponent_6

