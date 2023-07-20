// Access HTML element with useRef.

import { useRef, useState } from "react"

const UseRefHtmlElement = () => {
  const [inputState, setInput] = useState("")

  const inputRef = useRef()

  return (
    <div>
      <input type="text" value={inputState} onChange={(e)=>setInput(e.target.value)} ref={inputRef}/> {/* access HTML element via DOM */}
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default UseRefHtmlElement

