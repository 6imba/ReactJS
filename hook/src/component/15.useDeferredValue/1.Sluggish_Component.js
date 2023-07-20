import React, { useEffect, useMemo, useState } from 'react'

const SluggishComponent = () => {
  const [inputState,setInput] = useState()
  return (
    <>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/> <br />
      <List inputState={inputState}/>
    </>
  )
}
export default SluggishComponent

// const List = ({inputState}) => {
//   console.log("hi")
//   return inputState;
// }

// const List = ({inputState}) => {
//   for(let i=0; i<600000000; i++){} // makes out flow long as this for loop takes bit long to finish executing.(for loop is synchronous)
//   console.log("hi")
//   return inputState;
// }

const List = ({inputState}) => {
  const jsxList = []
  for(let i=0; i<6000; i++){
    jsxList.push(<p key={i}>{inputState}</p>) //sluggish: appending p into jsxlist 600000 time.
    console.log('pushing')
  }
  console.log("Hi, list ready")
  return jsxList;
}