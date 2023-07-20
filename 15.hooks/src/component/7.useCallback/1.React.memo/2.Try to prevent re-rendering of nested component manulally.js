import { useState } from "react"

const UseCallbackComponent_4 = () => {
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
            <Title/>
            <br />
            <br />
            <Count text="Age" count={age} />
            <Button handler={increaseAge}>Increment Age</Button>
            <br />
            <br />
            <Count text="Salary" count={salary} />
            <Button handler={increaseSalary}>Increment Salary</Button>
        </>
    )
}

export default UseCallbackComponent_4

const Title = () => {
    console.log("Rendering Title Component.")
    return(
        <h2>Learn useCallback function.</h2>
    )
}

const Count = ({text, count}) => {
    console.log(`Rendering Count Component ${text}.`)
    return(
        <h3>{text} - {count}</h3>  
    )
}

const Button = ({handler, children}) => {
    console.log(`Rendering Button Component ${children}.`)
    return(
        <button onClick={handler}>{children}</button>
    )
}
