import React from "react";
import { useState, useCallback } from "react"
 
const UseCallbackComponent_6 = () => {
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(775000);

    const increaseAge = useCallback(() => {
        setAge(age+1)
    }, [age]) //cached function

    const increaseSalary = useCallback(() => {
        setSalary(salary+75000)
    }, [salary]) //cached function

    console.log('--------------------------------------')
    console.log("Rendering Parent UseCallbackComponent_3 Component.")
    return (
        <>
            <MemoizedTitle/>
            <br />
            <br />
            <MemoizedCount text="Age" count={age} />
            <MemoizedButton handler={increaseAge}>Increment Age</MemoizedButton>
            <br />
            <br />
            <MemoizedCount text="Salary" count={salary} />
            <MemoizedButton handler={increaseSalary}>Increment Salary</MemoizedButton>
        </>
    )
}

export default React.memo(UseCallbackComponent_6)

const Title = () => {
    console.log("Rendering Title Component.")
    return(
        <h2>Learn useCallback function.</h2>
        )
    }
const MemoizedTitle = React.memo(Title)

const Count = ({text, count}) => {
    console.log(`Rendering Count Component ${text}.`)
    return(
        <h3>{text} - {count}</h3>  
    )
}
const MemoizedCount = React.memo(Count)

const Button = ({handler, children}) => {
    console.log(`Rendering Button Component ${children}.`)
    return(
        <button onClick={handler}>{children}</button>
    )
}
const MemoizedButton = React.memo(Button)

// here button also get re-render as handler function depends on state, and state changes on increment. Means handler function gets mutate on increment.