import { useState, useEffect } from "react";

const UseEffectComponent2 = () => {
    console.log("---------------------------------------------------------------")
    const [renderCount, setCount] = useState(1);
    const [timer, setTimer] = useState(0);

    setTimeout(() => {setCount(renderCount + 1); setTimer(timer+3) }, 3000);
    
    console.log("Statement-4..................")
    
    useEffect(() => console.log(`Component Render Count: ${renderCount} --- Statement-5.................`) , [renderCount]);
    
    console.log("Statement-6..................")
  
    return <h1>I've rendered {renderCount} times in {timer} second.</h1>;
}

export default UseEffectComponent2