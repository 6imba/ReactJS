import React, { useState } from "react";

const UseCallbackComponent_5 = () => {
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(775000);

    const increaseAge = () => {
        setAge(age+1)
    }
    
    const increaseSalary = () => {
        setSalary(salary+75000)
    }

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

export default React.memo(UseCallbackComponent_5)

const MemoizedTitle = React.memo(() => {
    console.log("Rendering Title Component.")
    return(
        <h2>Learn useCallback function.</h2>
        )
    }
)

const MemoizedCount = React.memo(({text, count}) => {
    console.log(`Rendering Count Component ${text}.`)
    return(
        <h3>{text} - {count}</h3>  
    )
})

const MemoizedButton = React.memo(({handler, children}) => {
    console.log(`Rendering Button Component ${children}.`)
    return(
        <button onClick={handler}>{children}</button>
    )
})