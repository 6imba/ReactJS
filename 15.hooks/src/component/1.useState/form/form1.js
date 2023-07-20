import { useState } from "react"

export default function MyForm1(){
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const [date,setDate] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
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

// individual state
// event object is only avialable in event_handler_function.
