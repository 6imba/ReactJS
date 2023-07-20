import React, { useState,useDeferredValue, useMemo } from 'react'

const UseDeferredValue_1 = () => {
  const [inputState,setInput] = useState()
  return (
    <>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/> <br />
      <List inputState={inputState}/>
    </>
  )
}
export default UseDeferredValue_1

// const List = ({inputState}) => {
//   const jsxList = []
//   for(let i=0; i<6000; i++){
//     jsxList.push(<p key={i}>{inputState}</p>) //sluggish: appending p into jsxlist 600000 time.
//     console.log('pushing')
//   }
//   console.log("Hi, list ready")
//   return jsxList;
// }

// const List = ({inputState}) => {
//     const deferredValue = useDeferredValue(inputState)
//     const jsxList = []
//     for(let i=0; i<6000; i++){
//         jsxList.push(<p key={i}>{deferredValue}</p>) //sluggish: appending p into jsxlist 600000 time.
//         console.log('pushing')
//     }
//     console.log("Hi, list ready")
//     return jsxList;
// }

// - useDeferredValue hook state that the given value is gonna changes many time.
// - so, useDeferredValue waits until that given value is not busy(there no any change in the given value for some time).
// - then process all of those changes.
// - to implement deferred concept, pass the value thats gonna change most often into useDeferredValue hook. ==> useDeferredValue(value)
// - and place the return of that particular useDeferredValue in your component.

const List = ({inputState}) => {
    const deferredValue = useDeferredValue(inputState)
    const jsxList = []
    useMemo(()=>{
        for(let i=0; i<6000; i++){
            jsxList.push(<p key={i}>{deferredValue}</p>) //sluggish: appending p into jsxlist 600000 time.
            console.log('pushing')
        }
    }, [deferredValue]) //here useMemo's callback get execute only when our deferredValue is changed. and our deferredValue gets change only when our inputState isn't busy/change/mutate for while.
    console.log("Hi, list ready")
    return jsxList;
}


