import { useState } from "react"

export default function MyForm13(){
    const [inputsObject,setInputs] = useState({})
    const [output,setProcessedOutput] = useState("")

    const inputFieldChangeHandler = (event,field) => {      
      setInputs((prevState) => {
          return {
                  ...prevState,
                  [field]:event.target.value,
                }
      })
    }

    const processData = (event) => {
      event.preventDefault()
      setProcessedOutput(JSON.stringify(inputsObject))
      console.log(JSON.stringify(inputsObject))
      setInputs({})
    }

    console.log(inputsObject.title)
    console.log(inputsObject.amount)
    console.log(inputsObject.date)

    return(
        <div>
          <form onSubmit={processData}>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")} value={inputsObject.title}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")} value={inputsObject.amount}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")} value={inputsObject.date}/><br/><br/>
            <button type="submit">Submit</button>
            <p>Curret State Object: {JSON.stringify(inputsObject)}</p>
            <h3>{output}</h3>
          </form>
        </div>
    )
}

// Input field is not cleared??
//  controlled or uncontrolled input element in a component.
