import { useState } from "react"

export default function MyForm3(){
    const [inputsObject,setInputs] = useState({})

    const titleChangeHandler = (event) => {
      setInputs({
        ...inputsObject,
        title:event.target.value,
      })
    }
    const amountChangeHandler = (event) => {
      setInputs({
        ...inputsObject,
        amount:event.target.value,
      })
    }
    const dateChangeHandler = (event) => {
      setInputs({
        ...inputsObject,
        date:event.target.value
      })
    }

    console.log(JSON.stringify(inputsObject))

    return(
        <div>
            Title: <input type="text" onChange={titleChangeHandler}/><br/><br/>
            Amount: <input type="number" onChange={amountChangeHandler}/><br/><br/>
            Date: <input type="date" onChange={dateChangeHandler}/><br/><br/>
            <button>Submit</button>
        </div>
    )
}

