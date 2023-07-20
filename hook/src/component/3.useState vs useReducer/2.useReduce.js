import { useReducer } from "react";

// // # 1:
// const UseReducerComponent = () => {
    
//     const reducerFunction = (state, action) => {
//         console.log(state)
//         console.log(action)
//         switch(action){
//             case "add":
//                 return state+2;
//             case "sub":
//                 return state-2;
//             case "of":
//                 return state*2;
//             case "by":
//                 return state/2;
//             case "reset":
//                     return 0;
//         }
//     }
                        
//     const [stateVariable, dispatchMethod] = useReducer(reducerFunction, 0);

//     return (
//         <>
//             <div>Output: {stateVariable}</div>
//             <button onClick={() => dispatchMethod('add')}>Add 2</button>
//             <button onClick={() => dispatchMethod('sub')}>Sub 2</button>
//             <button onClick={() => dispatchMethod('of')}>Multiply 2</button>
//             <button onClick={() => dispatchMethod('by')}>Divide 2</button>
//             <button onClick={() => dispatchMethod('reset')}>Reset</button>
//         </>
//     );
// }










// # 2:
const initialValue = 0;
const reducerFunction = (state, action) => {
    switch(action){
        case "add":
            return state+2;
        case "sub":
            return state-2;
        case "of":
            return state*2;
        case "by":
            return state/2;
        case "reset":
            return 0;
        }
    }
const UseReducerComponent = () => {               
    const [stateVariable, dispatchMethod] = useReducer(reducerFunction, initialValue);
    return (
        <>
            <div>Output: {stateVariable}</div>
            <button onClick={() => dispatchMethod('add')}>Add 2</button>
            <button onClick={() => dispatchMethod('sub')}>Sub 2</button>
            <button onClick={() => dispatchMethod('of')}>Multiply 2</button>
            <button onClick={() => dispatchMethod('by')}>Divide 2</button>
            <button onClick={() => dispatchMethod('reset')}>Reset</button>
        </>
    );
}


export default UseReducerComponent;