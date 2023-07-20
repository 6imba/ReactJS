import { useState, useEffect } from "react";

const FetechDataComponent = () => {
    console.log("Render component!")
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);

   console.log(data)
  
    return (
      <>
        <h1>Hi</h1>
        { data && data.map((item) => <p key={item.id}>{item.title}</p>) } {/* && operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy. */}
      </>
    );
}

export default FetechDataComponent
