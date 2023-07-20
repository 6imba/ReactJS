import { useState } from "react"

export default function MyForm9(){
    const [inputsObject,setInputs] = useState({})

    const inputFieldChangeHandler = (field,event) => { 
      setInputs((prevState,event) => {
        console.log(event)     
          return {
                  ...prevState,
                  [field]:event.target.value,
                }
      })
    }

    const eventHandler = (event) => {
      console.log("Console event object from event handler function: "+event)
      callFunc();
    }

    const callFunc = (event) => {
      console.log("Trying to console event object from event handler function: "+event)
    }

    return(
        <div>
            Title: <input type="text" onChange={()=>inputFieldChangeHandler("title")}/><br/><br/>
            Amount: <input type="number" onChange={()=>inputFieldChangeHandler("amount")}/><br/><br/>
            Date: <input type="date" onChange={()=>inputFieldChangeHandler("date")}/><br/><br/>
            Event: <input type="button" value="Trigger" onClick={eventHandler}/><br/><br/>
            <button>Submit</button>
            <p>Curret State Object: {JSON.stringify(inputsObject)}</p>
        </div>
    )
}

// callback inside setStateMethod, can have a default builting parameter called prevState which holds the previous_state_value.
// and its better to use prevState parameter when our new state data depends on previous state_data, because React schedules state updates.
// mean it doesnt perform the state updation imdediately.
// therefore, theoritically if we schedule multiple state_updation at same time, we might be depending upon outdated/incorrect state_data,if we dont use preState parameter.
// callback inside SetMethod takes previous state as parameter and return newState.

// Just remember that whenever your state updates depends on previous state value, use "callback with default_builtin_parameter call prevState", inside setState_method.
  // .ie: setInputs((prevState) => { { ...prevState, [field]:event.target.value, }})
    // > setState_method ==> setInputs()
    // > callback ==> (prevState) => { { ...prevState, [field]:event.target.value, }}
    // > default_builtin_parameter ==> prevState
    // > { ...prevState, [field]:event.target.value, } ==> newState

    // # depending on previous state, object duplicating like above example, counter increment, and many more.
    
// Q. How is state schedual in react?