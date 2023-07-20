import React, { useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect_1 = () => {
    const [bgColor, setBg] = useState("green")
    
    useLayoutEffect(()=>{
      console.log("useLayoutEffect")
      console.log("for loop start")
      for(let i=0;i<1000000000;i++){}
      console.log("for loop end")
      for(let i=0;i<1000000000;i++){}
      setBg("red")
    },[])

  return (
    <>
        <div style={{backgroundColor:bgColor}}>UseLayoutEffect_1</div>
    </>
  )
}

export default UseLayoutEffect_1