import { useState } from "react"

export default function MyForm12(){
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
      console.log(inputsObject)
      console.log(inputsObject.date)
      console.log(new Date(inputsObject.date))
    }

    return(
        <div>
          <form onSubmit={processData}>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")}/><br/><br/>
            <button type="submit">Submit</button>
            <p>Curret State Object: {JSON.stringify(inputsObject)}</p>
            <h3>{output}</h3>
          </form>
        </div>
    )
}

// Submit Form data!
// When we click submit button, page gets reloaded because this is default behaviour of browser as browser automatically send the request to the server which is hosting the corresponding webpage, whenever the form is submitted.
  // - but here we want o handle our form submited data by javascript within browser itself.
  // - so we can disable this default behaviour using, event.preventDefault()
