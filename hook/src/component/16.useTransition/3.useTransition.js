import { useState, useTransition } from "react";

const UseTransition_3 = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    const [later, setLater] = useState(100);
    
    function handleClick() {
        setCount(c => c + 1);
        startTransition(() => {
            console.log("for loop started!")
            for(let i=0;i<2000000000 ;i++){}
            console.log("for loop ended!")
            setLater(later+1)
        })
    }
  
    return (
      <div>
        {String(isPending)}
        {isPending ? <p>Pending...</p> : <p>Finished.</p> }
        <button onClick={handleClick}>{count}</button> <br /><br />
        {later}
      </div>
    );
}

export default UseTransition_3

// To see the concept click button 10 time quickly.