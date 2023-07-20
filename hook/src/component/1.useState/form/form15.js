import { useState } from "react"

export default function MyForm15(){
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
    // console.log(inputsObject)

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
  // console.log(props.inputsObject)
  return(
    <div>
      <p><b>S.N(1)</b>Title: {props.inputsObject.title}, Amount: {props.inputsObject.amount}, Date: {props.inputsObject.date}</p>
    </div>
  )
}


// Child component