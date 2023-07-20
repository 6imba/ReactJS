import { useState, useEffect, useRef } from "react";

// const UseRefComponent_1 = () => {
//     alert("Hi ...")
//     console.log("Hi ...")
//     const [inputValue, setInputValue] = useState(0);
//     useEffect(() => {
//         alert("Side-effect after rendering")
//         console.log("Side-effect after rendering")
//     });
//     alert("Bye ...")
//     console.log("Bye ...")
//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//         <h1>Input Value: {inputValue}</h1>
//       </>
//     );
// }
// {/* <React.StrictMode> in index.js makes page render twice. */}
// {/* <React.StrictMode> in index.js makes console and screen render only after all alter is done. */}




// const UseRefComponent_1 = () => {
//     alert("Hi ...")
//     console.log("Hi ...")
//     const [inputValue, setInputValue] = useState(0);
//     let renderCounter = 1;
//     useEffect(() => {
//         alert("Side-effect after rendering")
//         console.log("Side-effect after rendering")
//         renderCounter += 1; //mutation
//         console.log("Page render " + renderCounter)
//     });
//     alert("Bye ...")
//     console.log("Bye ...")
//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//         <h1>Input Value: {inputValue}</h1>
//       </>
//     );
// }
// here our component get re-render every time state(inputValue) changes,
// and we want to counter the times our component get render.
// here our page render counter variable(renderCounter) is 0 at our first render of the component.
// and after our component gets screen render, our useEffect hooks perform the side-effect(increment renderCounter variable by 1. ) and console 1.
// But now as our page get re-rendered after state changes, on trigger onChange event, our function components also gets executed again, at the mean time our renderCounter variable is again initialized as 1.
// So you might think we can solve this problem using component state as below.
// here, value of renderCounter gets initialized on every render.



// const UseRefComponent_1 = () => {
//     alert("Hi ...")
//     console.log("Hi ...")
//     const [inputValue, setInputValue] = useState(0);
//     const [renderCounter, setRenderCount] = useState(1);
//     useEffect(() => {
//         alert("Side-effect after rendering")
//         console.log("Side-effect after rendering")
//         setRenderCount(prevState => prevState+1) //mutation
//         console.log("Page render" + renderCounter)
//     });
//     alert("Bye ...")
//     console.log("Bye ...")
//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//         <h1>Input Value: {inputValue}</h1>
//         <h1>Render Counter: {renderCounter}</h1>
//       </>
//     );
// }
// But now as our page get re-rendered after state changes, on trigger onChange event, our function components also gets executed again, at the mean time our renderCounter variable is again initialized as 1.
// So you might think we can solve this problem using component state as below.
// But as our side-effect on render will again make itself re-render as it mutates the component-state"setRenderCount(prevState => prevState+1)",
// It will get into infinite loop.
// react_devtools_backend.js:4026 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
// So here we have a solution: useRef hook.




const UseRefComponent_1 = () => {
    alert("Hi ...")
    console.log("Hi ...")
    const [inputValue, setInputValue] = useState(0);
    const renderCounter = useRef(1);
    useEffect(() => {
        alert("Side-effect after rendering")
        console.log("Side-effect after rendering")
        console.log(renderCounter) //{current: 1}
        console.log("Page render", renderCounter.current ," times.")
        renderCounter.current += 1; //mutation and persist values between renders.
        // console.log("Page render" + renderCounter)
        // console.log("Page render", renderCounter)
});
    alert("Bye ...")
    console.log("Bye ...")
    return (
      <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h1>Input Value: {inputValue}</h1>
        <h1>Render Counter: {renderCounter.current}</h1> {/* persist values between renders. */}
      </>
    );
}

export default UseRefComponent_1

// Finally,
    // - therefore useRef Hook allows you to persist values between renders.
    // - It can be used to store a mutable value that does not cause a re-render when updated.
    // - It can be used to access a DOM element directly. ******
    // - The useRef Hook can also be used to keep track of previous state values. ******
    // - useRef() only returns one item. It returns an Object called current. // {current: 0}

// Step of implementaion:
    // 1. initialization: useRef we set the initial value: useRef(0).
            // - It's like doing this: const count = {current: 0}. We can access the count by using count.current.
    // 2. mutation: renderCounter.current += 1; 

