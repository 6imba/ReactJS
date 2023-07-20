import { useState, useEffect, useRef } from "react";

// const UseRefComponent_2 = () => {

//     alert("Hi ...")
//     console.log("Hi ...")

//     const [inputValue, setInputValue] = useState(0);
//     const renderCounter = useRef(0);
//     const heading1Element = useRef();
  
//     useEffect(() => {
//         alert("Side-effect after rendering")
//         console.log("Side-effect after rendering")
//         console.log(renderCounter) //{current: 1}
//         renderCounter.current += 1; //mutation
//         console.log("Page render", renderCounter.current ," times.")
//     });
  
//     const bgHeading = () => {
//         console.log(heading1Element)
//         console.log(heading1Element.current)
//         console.log(heading1Element.current.innerHTML)
//         heading1Element.current.innerHTML = "Keep quite!"
//     }

//     alert("Bye ...")
//     console.log("Bye ...")

//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//         <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
//         <button onClick={bgHeading}>click</button>
//         <h1>Input Value: {inputValue}</h1>
//         <h1>Render Counter: {renderCounter.current}</h1>
//       </>
//     );
// }


// const UseRefComponent_2 = () => {

//     const heading1Element = useRef();
  
//     const bgHeading = () => {
//         console.log(heading1Element)
//         console.log(heading1Element.current)
//         console.log(heading1Element.current.innerHTML)
//         heading1Element.current.innerHTML = "Keep quite!"
//     }

//     return (
//       <>
//         <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
//         <button onClick={bgHeading}>click</button>
//       </>
//     );
// }




const UseRefComponent_2 = () => {

    alert("Hi ...")
    console.log("Hi ...")

    const [inputValue, setInputValue] = useState('');
    const renderCounter = useRef(1);
    const heading1Element = useRef();
  
    useEffect(() => {
        alert("Side-effect after rendering")
        console.log("Side-effect after rendering")
        console.log(renderCounter) //{current: 1}
        renderCounter.current += 1; //mutation
        console.log("Page render", renderCounter.current ," times.")
    });
  
    const bgHeading = () => {
        console.log(heading1Element)
        console.log(heading1Element.current)
        console.log(heading1Element.current.innerHTML)
        heading1Element.current.style.color="red" //accessing DOM via useRef.
    }

    alert("Bye ...")
    console.log("Bye ...")

    return (
      <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
        <button onClick={bgHeading}>Sumit</button>
        <h1>Input Value: {inputValue}</h1>
        <h1>Render Counter: {renderCounter.current}</h1>
      </>
    );
}


export default UseRefComponent_2;

// - In general, we want to let React handle all DOM manipulation.
// - But there are some instances where useRef can be used without causing issues.
// - In React, we can add a ref attribute to an element to access it directly in the DOM.