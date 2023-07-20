import { useState, useEffect, useRef } from "react";

// const UseRefComponent_2 = () => {

//     alert("Hi ...")
//     console.log("Hi ...")

//     const [inputValue, setInputValue] = useState(0);
//     const renderCounter = useRef(1);
//     const heading1Element = useRef(); // #1
//     console.log(heading1Element) //{current: undefined}
  
//     useEffect(() => {
//         alert("Side-effect after rendering")
//         console.log("Side-effect after rendering")
//         console.log(renderCounter) //{current: 1}
//         console.log("Page render", renderCounter.current ," times.")
//         renderCounter.current += 1; //mutation
//         console.log(renderCounter) //{current: 2}
//         console.log("Value for next render:", renderCounter.current ," .")
//     });
  
//     const bgHeading = () => {
//         console.log(heading1Element)
//         console.log(heading1Element.current)//accessing DOM element
//         console.log(heading1Element.current.innerHTML)// element's content
//         heading1Element.current.innerHTML = "Keep quite!" // #3
//     }

//     alert("Bye ...")
//     console.log("Bye ...")

//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//         <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/* # 2 */} {/* In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
//         <button onClick={bgHeading}>click</button>
//         <h1>Input Value: {inputValue}</h1>
//         <h1>Render Counter: {renderCounter.current}</h1>
//       </>
//     );
// }


// const UseRefComponent_2 = () => {

//     const heading1Element = useRef(); // #1
  
//     const bgHeading = () => {
//         console.log(heading1Element)
//         console.log(heading1Element.current)
//         console.log(heading1Element.current.innerHTML)
//         heading1Element.current.innerHTML = "Keep quite!" //#3
//     }

//     return (
//       <>
//         <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/* #2 */} {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
//         <button onClick={bgHeading}>click</button>
//       </>
//     );
// }




// const UseRefComponent_2 = () => {

//     alert("Hi ...")
//     console.log("Hi ...")

//     const [inputValue, setInputValue] = useState('');
//     const renderCounter = useRef(1);
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
//         heading1Element.current.style.color="red" //accessing DOM via useRef.
//     }

//     alert("Bye ...")
//     console.log("Bye ...")

//     return (
//       <>
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//         <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
//         <button onClick={bgHeading}>Sumit</button>
//         <h1>Input Value: {inputValue}</h1>
//         <h1>Render Counter: {renderCounter.current}</h1>
//       </>
//     );
// }





const UseRefComponent_2 = () => {

  const [inputValue, setInputValue] = useState('');
  const renderCounter = useRef(1);
  const headingColor = useRef(false);
  const heading1Element = useRef(); //*************** 1
  console.log(heading1Element)
  
  useEffect(() => {
    renderCounter.current += 1;
    console.log(heading1Element) //*************** 3
    console.log(heading1Element.current) //*************** 3
  });

  const bgHeadingColor = () => {
    // let bgColor = heading1Element.current.style.color;
    // headingColor.current == false ? bgColor="red" : heading1Element.current.style.color="black";
    headingColor.current == false ? heading1Element.current.style.color="red" : heading1Element.current.style.color="black";
    headingColor.current = !headingColor.current; //color status changed after color is changed above.
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      {/*  ***************2  */}
      <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/*In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
      <button onClick={bgHeadingColor}>Change Heading Color</button>
      <h1>Input Value: {inputValue}</h1>
      <h1>Heading Color: {String(headingColor.current)}</h1>
      <h1>Render Counter: {renderCounter.current}</h1>
    </>
  );
}


export default UseRefComponent_2;

// - In general, we want to let React handle all DOM manipulation.
// - But there are some instances where useRef can be used without causing issues.
// - In React, we can add a ref attribute to an element to access it directly in the DOM.

// # Step for accessing DOM:
  // 1. create useRef object.
  // 2. add ref attribute to html element.
  // 3. Access DOM

  // > const heading1Element = useRef(); // #1
  // > <h2 ref={heading1Element}>Heading1 with react ref attribute.</h2> {/* # 2 */} {/* In React, we can add a ref attribute to an element to access it directly in the DOM.*/}
  // > heading1Element.current.innerHTML = "Keep quite!" // #3

  