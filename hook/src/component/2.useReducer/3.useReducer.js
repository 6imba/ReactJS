import { useState, useReducer } from "react"

const initialStateObject ={stock:"name", unit:0, color:"false"}
const reducerFunction = (componentState,action) => {
    switch(action.state){
        case "stock":
            return {...componentState, stock:action.dataPayLoad};
        case "unit":
            return {...componentState, unit:action.task == "increment" ? componentState.unit+1 : componentState.unit-1};
        case "color":
            return {...componentState, color:action.task=="true" ?  "red" :  "black"};
    }
}
const ACTION_TASK = {
    increment: "increment",
    decrement: "decrement",
    colorRed: "true",
    colorWhite: "false",
}

const UseReduceComponent = () => {
    const [stateObject, dispatchFunction] = useReducer(reducerFunction, initialStateObject)
    return (
        <div style={{color:stateObject.color}}>
            Enter Stock: <input type="text" onChange={(e)=>dispatchFunction({state:"stock", dataPayLoad:e.target.value})}/> <br />
            <button onClick={()=>dispatchFunction({state:"unit", task:ACTION_TASK.increment})}>Unit Increment</button>
            <span> {stateObject.unit} </span>
            <button onClick={()=>dispatchFunction({state:"unit", task:ACTION_TASK.decrement})}>Unit Decrement</button><br />
            <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorWhite})}>Set Black Color</button>
            <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorRed})}>Set Red Color</button>
            <br /><br /><br />
            <h2>State:{JSON.stringify(stateObject)}</h2>
        </div>
    )
}

export default UseReduceComponent

