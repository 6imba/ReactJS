import { useState, useEffect, useRef } from "react";

const UseRefComponent_3 = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    
    useEffect(() => {
      console.log(inputValue)
      previousInputValue.current = inputValue; //track previous state value //value render vaisakesi balla state update hune ho. tesaile previous state value nai dekhauxa.
    }, [inputValue]);
    
    return (
      <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );      
}

export default UseRefComponent_3