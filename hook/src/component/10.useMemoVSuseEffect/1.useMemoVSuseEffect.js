import { useState, useEffect, useMemo } from "react"

const UseMemoVSuseEffect_1 = () => {
  const [dep,setDep] = useState(1)
  const [test,setTest] = useState(1)

  useMemo(()=>{
    console.log("UseMemo")
  },[dep])
  // },[])
  // })

  useEffect(()=>{
    console.log("UseEffect")
  },[dep])
    // },[])
  // })
  
  const double = () => {
    setDep(dep*2)
  }

  const testHandler = () => {
    setTest(test*2)
  }

  return (
    <>
      <p>Dep Value: {dep}</p>
      <button onClick={double}>Double</button> <br />
      <p>Test Value: {test}</p>
      <button onClick={testHandler}>Test</button>
    </>
  )
}

export default UseMemoVSuseEffect_1