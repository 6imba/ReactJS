import { useState, useReducer } from "react"


// // # 1:
// const UseReduceComponent = () => {
//     const [stateStock, setStock] = useState("name");
//     const [stateUnit, setUnit] = useState(0);
//     const [stateColor, setColor] = useState("");

//   return (
//     <div style={{color:stateColor}}>
//         Enter Stock: <input type="text" onChange={(e)=>setStock(e.target.value)}/> <br />
//         <button onClick={()=>setUnit(stateUnit+1)}>Unit Increment</button>
//         <span> {stateUnit} </span>
//         <button onClick={()=>setUnit(stateUnit-1)}>Unit Decrement</button><br />
//         <button onClick={()=>setColor("black")}>Set White Color</button>
//         <button onClick={()=>setColor("red")}>Set Red Color</button>
//         <br /><br /><br />
//         <h2>State:</h2>
//         <h3>Stock: {stateStock}</h3>
//         <h3>Unit: {stateUnit}</h3>
//         <h3>Color: {stateColor}</h3>
//     </div>
//   )
// }


// // # 2:
// const UseReduceComponent = () => {
//     const [stateStock, setStock] = useState("name");
//     const [stateUnit, setUnit] = useState(0);
//     const [stateColor, setColor] = useState("");

//     const handler = (action) => {
//         // console.log(action)
//         switch(action.state){
//             case "stock":
//                 // console.log("stock");
//                 setStock(action.data);
//                 break;
//             case "unit":
//                 // console.log("unit");
//                 action.task == "increment" ? setUnit(stateUnit+1) : setUnit(stateUnit-1);
//                 break;
//             case "color":
//                 console.log("color");
//                 action.task == "red" ? setColor("red") : setColor("black");
//                 break;
//         }
//     }
// // // you see its very difficult to write logic on state variable using useState.
// // // So use useReduce instead, which maitain both state and logic for it as well.

//     return (
//         <div style={{color:stateColor}}>
//             Enter Stock: <input type="text" onChange={(e)=>handler({state:"stock", data:e.target.value})}/> <br />
//             <button onClick={()=>handler({state:"unit", task:"increment"})}>Unit Increment</button>
//             <span> {stateUnit} </span>
//             <button onClick={()=>handler({state:"unit", task:"decrement"})}>Unit Decrement</button><br />
//             <button onClick={()=>handler({state:"color", task:"white"})}>Set Black Color</button>
//             <button onClick={()=>handler({state:"color", task:"red"})}>Set Red Color</button>
//             <br /><br /><br />
//             <h2>State:</h2>
//             <h3>Stock: {stateStock}</h3>
//             <h3>Unit: {stateUnit}</h3>
//             <h3>Color: {stateColor}</h3>
//         </div>
//     )
// }
// // // you see its very difficult to write logic on state variable using useState. So use useReduce instead.


// // // # 3:
// const UseReduceComponent = () => {
//     const initialStateObject ={stock:"name", unit:0, color:"false"}
//     const reducerFunction = (componentState,action) => {
//         console.log(componentState)
//         console.log(action)
//         switch(action.state){
//             case "stock":
//                 console.log("stock");
//                 // console.log(action.state);
//                 // console.log(componentState.stock);
//                 // console.log(action.data);
//                 return {...componentState, stock:action.dataPayLoad};

//             case "unit":
//                 console.log("unit");
//                 // console.log(action.state);
//                 // console.log(componentState.unit);
//                 // console.log(action.task);
//                 return {...componentState, unit:action.task == "increment" ? componentState.unit+1 : componentState.unit-1};
//             case "color":
//                 console.log("color");
//                 // console.log(action.state);
//                 // console.log(componentState.unit);
//                 // console.log(action.task);
//                 console.log(action.task)
//                 console.log(action.task ?  "red" :  "white")
//                 return {...componentState, color:action.task=="true" ?  "red" :  "white"};
//         }
//     }
//     const [stateObject, dispatchFunction] = useReducer(reducerFunction, initialStateObject)
//     console.log(stateObject)
//     console.log(stateObject.color)



//     return (
//         <div style={{color:stateObject.color}}>
//             Enter Stock: <input type="text" onChange={(e)=>dispatchFunction({state:"stock", dataPayLoad:e.target.value})}/> <br />
//             <button onClick={()=>dispatchFunction({state:"unit", task:"increment"})}>Unit Increment</button>
//             <span> {stateObject.unit} </span>
//             <button onClick={()=>dispatchFunction({state:"unit", task:"decrement"})}>Unit Decrement</button><br />
//             <button onClick={()=>dispatchFunction({state:"color", task:"false"})}>Set White Color</button>
//             <button onClick={()=>dispatchFunction({state:"color", task:"true"})}>Set Red Color</button>
//             <br /><br /><br />
//             <h2>State:{JSON.stringify(stateObject)}</h2>
//         </div>
//     )
// }




// // // # 4:
// const UseReduceComponent = () => {
//     const initialStateObject ={stock:"name", unit:0, color:"false"}
//     const reducerFunction = (componentState,action) => {
//         switch(action.state){
//             case "stock":
//                 return {...componentState, stock:action.dataPayLoad};
//             case "unit":
//                 return {...componentState, unit:action.task == "increment" ? componentState.unit+1 : componentState.unit-1};
//             case "color":
//                 return {...componentState, color:action.task=="true" ?  "red" :  "white"};
//         }
//     }
//     const ACTION_TASK = {
//         increment: "increment",
//         decrement: "decrement",
//         colorRed: "true",
//         colorWhite: "false",
//     }
//     const [stateObject, dispatchFunction] = useReducer(reducerFunction, initialStateObject)

//     return (
//         <div style={{color:stateObject.color}}>
//             Enter Stock: <input type="text" onChange={(e)=>dispatchFunction({state:"stock", dataPayLoad:e.target.value})}/> <br />
//             <button onClick={()=>dispatchFunction({state:"unit", task:ACTION_TASK.increment})}>Unit Increment</button>
//             <span> {stateObject.unit} </span>
//             <button onClick={()=>dispatchFunction({state:"unit", task:ACTION_TASK.decrement})}>Unit Decrement</button><br />
//             <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorWhite})}>Set White Color</button>
//             <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorRed})}>Set Red Color</button>
//             <br /><br /><br />
//             <h2>State:{JSON.stringify(stateObject)}</h2>
//         </div>
//     )
// }




// // # 5:
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
            <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorWhite})}>Set White Color</button>
            <button onClick={()=>dispatchFunction({state:"color", task:ACTION_TASK.colorRed})}>Set Red Color</button>
            <br /><br /><br />
            <h2>State:{JSON.stringify(stateObject)}</h2>
        </div>
    )
}



export default UseReduceComponent

