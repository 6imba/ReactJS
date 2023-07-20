import { useState } from "react"

export default function FormApp_Form(props){
    const [inputsObject,setInputs] = useState({title:"",amount:"",date:"",gender:""})

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
      props.setDB((prevState) => [...prevState,{...inputsObject,id:prevState.length+1}]) // Pass data buttom-top
      setInputs({title:"",amount:"",date:"",gender:""})
    }
    
    return(
        <div>
          <h2>Add Item:</h2>
          <form onSubmit={processData}>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")} value={inputsObject.title}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")} value={inputsObject.amount}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")} value={inputsObject.date}/><br/><br/>
            Gender: 
            <select name="cars" id="cars" onChange={(event)=>inputFieldChangeHandler(event,"gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="LGBT">LGBT</option>
            </select><br/><br/>
            <button type="submit">Submit</button>
            <p><i>Current Inputs = {JSON.stringify(inputsObject)}</i></p>
            <hr/>
          </form>
        </div>
    )
}
