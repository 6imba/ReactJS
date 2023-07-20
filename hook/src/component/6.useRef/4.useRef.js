import { useEffect, useRef, useState } from "react"

const UseRefComponent_4 = () => {
  const [inputState, setInput] = useState("")
  const inputRef = useRef()
  // const inputRef = useRef("1")
  console.log(inputRef)
  useEffect(()=>console.log(inputRef))
  return (
    <div>
      <input type="text" value={inputState} onChange={(e)=>setInput(e.target.value)} ref={inputRef}/>
    </div>
  )
}

export default UseRefComponent_4

// you see at first before rendering JSX inputRef value is undefined as we have not passed any initial value.
// but after rendering JSX page.
  // - <input ref={inputRef}/>
  // set inputRef value as {current: input}
  // So you can access a html element with useRef.
  // but what if we need to access multiple element