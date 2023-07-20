import { useState } from "react";

// # 1:
const UseStateComponent = () => {
    const [stateVariable, setCounter] = useState(0);
    const handler = (action) => {
        switch(action){
            case "add":
                return setCounter(stateVariable+2)
            case "sub":
                return setCounter(stateVariable-2)
            case "of":
                return setCounter(stateVariable*2)
            case "by":
                return setCounter(stateVariable/2)
            case "reset":
                return setCounter(0)
        }
    }
    return (
        <>
            <div>Output: {stateVariable}</div>
            <button onClick={() => handler('add')}>Add 2</button>
            <button onClick={() => handler('sub')}>Sub 2</button>
            <button onClick={() => handler('of')}>Multiply 2</button>
            <button onClick={() => handler('by')}>Divide 2</button>  
            <button onClick={() => handler('reset')}>Reset</button>
        </>
    )
}





// // # 2:
// const initialValue = 0;
// const handler = (action,stateVariable,setCounter) => {
//     switch(action){
//         case "add":
//             return setCounter(stateVariable+2)
//         case "sub":
//             return setCounter(stateVariable-2)
//         case "of":
//             return setCounter(stateVariable*2)
//         case "by":
//             return setCounter(stateVariable/2)
//         case "reset":
//             return setCounter(0)
//     }
// }
// const UseStateComponent = () => {
//     const [stateVariable, setCounter] = useState(initialValue);
//     return (
//         <>
//             <div>Output: {stateVariable}</div>
//             <button onClick={() => handler('add',stateVariable,setCounter)}>Add 2</button>
//             <button onClick={() => handler('sub',stateVariable,setCounter)}>Sub 2</button>
//             <button onClick={() => handler('of',stateVariable,setCounter)}>Multiply 2</button>
//             <button onClick={() => handler('by',stateVariable,setCounter)}>Divide 2</button>  
//             <button onClick={() => handler('reset',stateVariable,setCounter)}>Reset</button>
//         </>
//     )
// }


export default UseStateComponent;