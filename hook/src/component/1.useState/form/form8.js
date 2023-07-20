import { useState } from "react"

export default function MyForm8(){
    const [inputsObject,setInputs] = useState({})

    const inputFieldChangeHandler = (event,field) => {      
      // console.log(event)
      // console.log(field)
      setInputs((prevState) => {
          return {
                  ...prevState,
                  [field]:event.target.value,
                }
      })
    }
    // console.log(inputsObject)
    // console.log(JSON.stringify(inputsObject))

    return(
        <div>
            Title: <input type="text" onChange={(event)=>inputFieldChangeHandler(event,"title")}/><br/><br/>
            Amount: <input type="number" onChange={(event)=>inputFieldChangeHandler(event,"amount")}/><br/><br/>
            Date: <input type="date" onChange={(event)=>inputFieldChangeHandler(event,"date")}/><br/><br/>
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
// How to pass and access other parameter into event handler function beside event_object?
// 