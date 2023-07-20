import { useState } from "react"

export default function MyForm2(){
    const [inputsObject,setInputs] = useState({})

    const titleChangeHandler = (event) => {
      setInputs({
        title:event.target.value,
        amount:"",
        date:""
      })
    }
    const amountChangeHandler = (event) => {
      setInputs({
        title:"",
        amount:event.target.value,
        date:""
      })
    }
    const dateChangeHandler = (event) => {
      setInputs({
        title:"",
        amount:"",
        date:event.target.value
      })
    }

    return(
        <div>
            Title: <input type="text" onChange={titleChangeHandler}/><br/><br/>
            Amount: <input type="number" onChange={amountChangeHandler}/><br/><br/>
            Date: <input type="date" onChange={dateChangeHandler}/><br/><br/>
            <button>Submit</button>
        </div>
    )
}

