import { useEffect, useState } from "react"

const UseEffectComponent1 = () => {
    let [var1, setVar1] = useState(1)
    let [var2, setVar2] = useState(10)
    let [var3, setVar3] = useState(100)

    alert("Hi.")

    useEffect(() => {
        alert("Initial Paged rendered!")
    }, [])
    useEffect(() => {
        alert("Paged rendered, after change in any of the state variable.")
    })
    useEffect(() => {
        alert("Paged rendered, after change in state variable 1.")
    }, [var1])
    useEffect(() => {
        alert("Paged rendered, after change in state variable 2.")
    }, [var2])
    useEffect(() => {
        alert("Paged rendered, after change in state variable 3.")
    }, [var3])

    alert("Bye.")
    console.log(var1,var2,var3)

    
    return (
        <>
            <div>State variable 1: {var1} </div>
            <div>State variable 2: {var2} </div>
            <div>State variable 3: {var3} </div>
            <button onClick={()=>setVar1( var1+ 1)}>Change1</button>
            <button onClick={()=>setVar2( var2+ 1)}>Change2</button>
            <button onClick={()=>setVar3( var3+ 1)}>Change3</button>
        </>
    )
}

export default UseEffectComponent1

// useState hook defines what to do when state/particular-state of a component changes.
// useEffect(() => {program...}, []) // perform {program} when component is rendered for the first time only.
// useEffect(() => {program...}) // perform {program} when any of the state in the component changes.
// useEffect(() => {program...}, [var1, var2, var3]) // perform {program} when var1,var2,var3 state in the component changes.
