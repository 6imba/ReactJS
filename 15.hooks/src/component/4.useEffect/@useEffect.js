import { useEffect } from "react"

const UseEffectFlow = () => {

    alert("Hi.")
    console.log("Hi.")

    useEffect(() => {
        alert("Initial Paged rendered1!")
        setTimeout(() => {
            alert("Initial Paged rendered2!")
        }, 3000)
    })

    alert("Bye.")

    
    return (
        <h1>Hi</h1>
    )
}

export default UseEffectFlow

// useState hook defines what to do when state/particular-state of a component changes.
// useEffect(() => {program...}, []) // perform {program} when component is rendered for the first time only.
// useEffect(() => {program...}) // perform {program} when any of the state in the component changes.
// useEffect(() => {program...}, [var1, var2, var3]) // perform {program} when var1,var2,var3 state in the component changes.
