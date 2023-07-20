import { useState } from "react"

export default function ParentFormComponent(){
  const [inputsObject,setInputs] = useState({title:"",amount:"",date:""})
  return(
    <>
      <MyForm17 inputsObject={inputsObject} setInputs={setInputs}/>
      <ChildComponent inputsObject={inputsObject}/>
    </>
  )
}

const MyForm17 = (props) => {
    const inputFieldChangeHandler = (event,field) => {      
      props.setInputs((prevState) => {
          return {
                  ...prevState,
                  [field]:event.target.value,
                }
      })
    }

    const processData = (event) => {
      event.preventDefault()
      props.setInputs({title:"",amount:"",date:""})
    }

    return(
        <div>
          <form onSubmit={processData}>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")} value={props.inputsObject.title}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")} value={props.inputsObject.amount}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")} value={props.inputsObject.date}/><br/><br/>
            <button type="submit">Submit</button>
            <hr/>
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