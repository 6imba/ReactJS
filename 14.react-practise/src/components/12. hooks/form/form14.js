import { useState } from "react"

export default function MyForm14(){
    const [inputsObject,setInputs] = useState({title:"",amount:"",date:""})
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
      setInputs({title:"",amount:"",date:""})
    }


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

// Input field clear...
// Two way binding:
  // - when input filed chnages we 1. change the state and 2. while re-rendering the component we pass new state as the input value(so that we can reset/change input programatically).
  // Two way binding:change in input_field_data changes the component_state and change in state changes the input_value_attribute.

// - when input field data is changed, event is trigger but when input_field_value is changed no any event is triggered so no any infinite loop.

// - Two way binding is very useful when you work with react form.
// - 