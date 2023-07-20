import { useState } from "react"

export default function MyForm16(){
    const [inputsObject,setInputs] = useState({title:"",amount:"",date:""})

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
      setInputs({title:"",amount:"",date:""})
    }

    return(
        <div>
          <form onSubmit={processData}>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")} value={inputsObject.title}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")} value={inputsObject.amount}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")} value={inputsObject.date}/><br/><br/>
            <button type="submit">Submit</button>
            <hr/>
            <ChildComponent inputsObject={inputsObject}/>
          </form>
        </div>
    )
}

const ChildComponent = (props) => {
  const [childState,setInputs] = useState(props.inputsObject)
  return(
    <div>
      <p><b>S.N(1)</b>Title: {childState.title}, Amount: {childState.amount}, Date: {childState.date}</p>
    </div>
  )
}


// Child component