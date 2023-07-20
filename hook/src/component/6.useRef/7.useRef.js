// but what if we need to access multiple element
  
import { useEffect, useRef, useState } from "react"

const UseRefComponent_7 = () => {
  const [inputState, setInput] = useState("")

  const inputRef = useRef()
  const paraRef = useRef()
  const buttonRef = useRef()
  // const inputRef,paraRef,buttonRef = useRef()
console.log(inputRef)

  const ELEMENTS = [inputRef,paraRef,buttonRef]
  
  console.log(ELEMENTS)
  useEffect(()=>{
    console.log(ELEMENTS)
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

export default UseRefComponent_7

