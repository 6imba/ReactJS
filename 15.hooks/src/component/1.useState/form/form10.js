import { useState } from "react"

export default function MyForm10(){
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

    const processData = () => {
      setProcessedOutput(JSON.stringify(inputsObject))
    }

    return(
        <div>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")}/><br/><br/>
            <button onClick={processData}>Submit</button>
            <p>Curret State Object: {JSON.stringify(inputsObject)}</p>
            <h3>{output}</h3>
        </div>
    )
}

// Submit input data!