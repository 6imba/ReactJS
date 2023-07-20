import React, { useReducer, useState } from 'react'

// // # 1:
// const UseReducerComponent = () => {
//     const [stateVariable, setCounter] = useState(0);
//     const addition = () => {
//         setCounter(stateVariable+2)
//     }
//     const subtraction = () => {
//         setCounter(stateVariable-2)
//     }
//     const multiplication = () => {
//         setCounter(stateVariable*2)
//     }
//     const division = () => {
//         setCounter(stateVariable/2)
//     }
//     const reset = () => {
//         setCounter(0)
//     }
//     return (
//         <>
//             <div>Output: {stateVariable}</div>
//             <button onClick={addition}>Add 2</button>
//             <button onClick={subtraction}>Sub 2</button>
//             <button onClick={multiplication}>Multiply 2</button>
//             <button onClick={division}>Divide 2</button>  
//             <button onClick={reset}>Reset</button>  
//         </>
//     )
// }

// // # 2:
// const UseReducerComponent = () => {
//     const [stateVariable, setCounter] = useState(0);
//     const handler = (action) => {
//         switch(action){
//             case "add":
//                 setCounter(stateVariable+2)
//                 break;
//             case "sub":
//                 setCounter(stateVariable-2)
//                 break;
//             case "of":
//                 setCounter(stateVariable*2)
//                 break;
//             case "by":
//                 setCounter(stateVariable/2)
//                 break;
//             case "reset":
//                 setCounter(0)
//                 break;
//         }
//     }
//     return (
//         <>
//             <div>Output: {stateVariable}</div>
//             <button onClick={() => handler('add')}>Add 2</button>
//             <button onClick={() => handler('sub')}>Sub 2</button>
//             <button onClick={() => handler('of')}>Multiply 2</button>
//             <button onClick={() => handler('by')}>Divide 2</button>  
//             <button onClick={() => handler('reset')}>Reset</button>
//         </>
//     )
// }



// // # 3:
// const UseReducerComponent = () => {
//     const [stateVariable, setCounter] = useState(0);
//     const handler = (action) => {
//         switch(action){
//             case "add":
//                 return setCounter(stateVariable+2)
//             case "sub":
//                 return setCounter(stateVariable-2)
//             case "of":
//                 return setCounter(stateVariable*2)
//             case "by":
//                 return setCounter(stateVariable/2)
//             case "reset":
//                 return setCounter(0)
//         }
//     }
//     return (
//         <>
//             <div>Output: {stateVariable}</div>
//             <button onClick={() => handler('add')}>Add 2</button>
//             <button onClick={() => handler('sub')}>Sub 2</button>
//             <button onClick={() => handler('of')}>Multiply 2</button>
//             <button onClick={() => handler('by')}>Divide 2</button>  
//             <button onClick={() => handler('reset')}>Reset</button>
//         </>
//     )
// }




// // # 4:
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


// yata #3 ra #4 ma k difference xa vanda
// 3 ma handler function call garxa and handler function ko defination ma state variable change garxa.
// 4 ma dispatchMethod call garxa and reducerFunction ko defination ma state variable change garxa.
// 3 ma state variable change garda, we use setState method(passing direct new value inside setState method.)
// 4 ma state variable change garda, we use reducerFunction(writing logic to create new vriable).
// useState hook use garda, handler fucntion hamile function component bahira define garyo vane tyo function ma stateVariable ra setState method chai as argument pathaunu perxa.  example #5
// useReducer hook use garda, reducer_fucntion hamile function component bahira jata define garda state argument default pass hunxa ra kunai pani set_method pass garnu perdaina.(action vanne auta optional argument  pass garda hunxa). example #6



// // # 5:
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
// const UseReducerComponent = () => {
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



// # 6:
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


export default UseReducerComponent
