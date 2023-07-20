import { useState } from "react"

export default function MyForm4(){
    const [inputsObject,setInputs] = useState({})

    const inputFieldChangeHandler = (event,field) => {      
      if(field === "title"){
        setInputs({
          ...inputsObject,
          title:event.target.value,
        })
      }
      else if(field === "amount"){
        setInputs({
          ...inputsObject,
          amount:event.target.value,
        })
      }
      else{
        setInputs({
          ...inputsObject,
          date:event.target.value
        })
      }
    }

    console.log(JSON.stringify(inputsObject))

    return(
        <div>
            Title: <input type="text" onChange={()=>inputFieldChangeHandler("title")}/><br/><br/>
            Amount: <input type="number" onChange={()=>inputFieldChangeHandler("amount")}/><br/><br/>
            Date: <input type="date" onChange={()=>inputFieldChangeHandler("date")}/><br/><br/>
            <button>Submit</button>
        </div>
    )
}

// multiple state in single object.