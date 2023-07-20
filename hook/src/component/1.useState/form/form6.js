import { useState } from "react"

export default function MyForm6(){
    const [inputsObject,setInputs] = useState({})

    const inputFieldChangeHandler = (event,field) => {      
      console.log(event)
    //   console.log(field)
      setInputs({
        ...inputsObject,
        field:event.target.value,
      })
    }

    console.log(inputsObject)
    console.log(JSON.stringify(inputsObject))

    return(
        <div>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")}/><br/><br/>
            <button>Submit</button>
        </div>
    )
}

// event objet is only avialable in event handler function.