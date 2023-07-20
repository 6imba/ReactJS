import { useState } from "react"

const UseCallbackComponent_3 = () => {
    console.log('--------------------------------------')
    console.log("Rendering Parent UseCallbackComponent_3 Component.")
    return (
        <>
            <Title/>
            <br />
            <br />
            <Count text="Age" />
            <br />
            <br />
            <Count text="Salary" />
        </>
    )
}

export default UseCallbackComponent_3

const Title = () => {
    console.log("Rendering Title Component.")
    return(
        <h2>Learn useCallback function.</h2>
    )
}

const Count = ({text}) => {
    console.log(`Rendering Count Component ${text}.`)
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(775000);

    const increaseAge = () => {
        setAge(age+1)
    }
    

    const increaseSalary = () => {
        setSalary(salary+75000)
    }

    let handler = text=="Age" ? increaseAge: increaseSalary;
    let value = text=="Age" ? age: salary;

    return(
        <>
            <h3>{text} - {value}</h3>  
            <Button handler={handler}>Increment {text}</Button>
        </>
    )
}

const Button = ({handler, children}) => {
    console.log(`Rendering Button Component ${children}.`)
    return(
        <button onClick={handler}>{children}</button>
    )
}