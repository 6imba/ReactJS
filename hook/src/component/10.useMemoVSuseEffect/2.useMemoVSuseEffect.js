import { useState, useEffect, useMemo } from "react"

const UseMemoVSuseEffect_2 = () => {
  const [dep,setDep] = useState(1)
  const [test,setTest] = useState(1)

  const x = useMemo(()=>{
    console.log("UseMemo")
    // return "UM";
  },[dep])
  
  const y = useEffect(()=>{
    console.log("UseEffect")
    // return "UE"; //useEffect must not return anything besides a function, which is used for clean-up.
  },[dep])
  
  const double = () => {
    setDep(dep*2)
  }
  console.log(x)
  console.log(y)

  return (
    <>
      <p>Dep Value: {dep}</p>
      <button onClick={double}>Double</button> <br />
      {x}
      {y}
    </>
  )
}

export default UseMemoVSuseEffect_2