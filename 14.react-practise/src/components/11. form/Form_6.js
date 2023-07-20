import { useState } from "react";

const Form_6 = () => {

    const [inputs, setInputs] = useState({});
    const [myCar, setMyCar] = useState("Volvo");
    const [info, setInfo] = useState("");

    const handleInputChnagedField = (event) => {
        const filedName  = event.target.name;
        const fieldValue  = event.target.value;

        const newInputsObj = {...inputs, [filedName]:fieldValue}
        console.log(newInputsObj)
        setInputs(newInputsObj)
    }
    
    const handleCar = (event) => {
        console.log(event.target.value)
        setMyCar(event.target.value)
      }
    
    const handleSubmittedForm = (e) => {
        e.preventDefault()
        setInfo(`Name:${inputs.username} Email:${inputs.gmail} Car:${myCar}`)
    }

    return(
        <form onSubmit={handleSubmittedForm}>
            <label>Name:
                <input type="text" onChange={handleInputChnagedField} placeholder="enter your name" name="username"/>
            </label>
            <label>G-mail:
                <input type="email" onChange={handleInputChnagedField} placeholder="enter your gmail" name="gmail"/>
            </label>
            <select value={myCar} onChange={handleCar}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <button>Submit</button>
            <p>{info}</p>
        </form>
    )
}

export default Form_6;





// // # Spread operator in object
// const obj1 = {a:1}
// const obj2 = {...obj1,b:2}
// const obj3 = {...obj2,b:4}
// console.log(obj3)

// const x = "b"
// const obj4 = {...obj2,x:8}
// console.log(obj4)

// const key = "c"
// obj4[key] = 6
// console.log(obj4)
// console.log(obj4["c"])

// const y = "b"
// const obj5 = {...obj2,[y]:8}
// console.log(obj5)
