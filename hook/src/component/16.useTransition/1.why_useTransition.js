import { useState } from "react";

const UseTransition_1 = () => {
  const [input,setInput] = useState("")
  const [list,setList] = useState([])

  const handler = (e) => {
    setInput(e.target.value)
    let l = []
    for(let i=0; i<6000; i++){
      l.push(e.target.value)
      console.log("pushing into array")
    }
    setList(l)
  }

  return (
    <>
      <input type="text"  value={input} onChange={handler}/>
      {list.map((item,index)=> <p key={index}>{item}</p> )}
    </>
  )
}

export default UseTransition_1

// So, what's going on? 
// The way react work is:
  // - when we make a state change(setInput,setList),
  // - react will try to combine together all the different state changes we make into one calculateNewValue.
  // - and then react is gonna make them all call at once before rendering.
  // - so in above example it gonna combine our setInput and setList.
  // - ans as our setList take long time to finish execution, our rendering is also blocked.
  
// So, instead what I would like to is that set setInput has a higher priority so that setList:expensive operation doesn't block the flow for setInput.
  // - that's what useTransition allow use to do
  // - useTransition hook allow use to make two different state changes at the same time but rank/priotize them in order how important are those state changing method.
  // - setInput(more_priority) && setList(rank_later)

// # Finally, lets see how to use useTransition hook. 