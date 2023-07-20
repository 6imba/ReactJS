import { useState } from "react"

export default function MyForm5(){
    const [inputsObject,setInputs] = useState({})

    const inputFieldChangeHandler = (event,field) => {      
      // console.log(event)
      console.log(field)
      // setInputs({
      //   ...inputsObject,
      //   field:event.target.value,
      // })
    }


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