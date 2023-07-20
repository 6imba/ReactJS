import { useState, useEffect } from "react";

const CustomeHook_1 = () => {
    console.log("Render component!")
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);

   console.log(data)
   console.log(false && true)
   console.log(true && false)
   console.log(false && false)
   console.log(true && true)
   console.log(2 > 0 && -2 > 0);
   console.log(2 > 0 && 3 > 0);
   console.log(-2 > 0 && 3 > 0);
  
    return (
      <>
        <h1>Hi</h1>
        {/* { data && data.map((item) => <p key={item.id}>{item.title}</p>) } */}
        {/* { data } */}
        {/* { JSON.stringify(data) } */}
        {/* { data.map((item) => <p key={item.id}>{item.title}</p>) } */}
        { String(false && true) }
        <br />
        {1 && 0}
        <br />
        { "apple" && "ball" }
        <br />
        { "apple" && "ball" }
        {/* { data && data.map((item) => <p key={item.id}>{item.title}</p>) } */}
      </>
    );
}

export default CustomeHook_1


// # Logical AND (&&) operator:
    // - The logical AND (&&) operator (logical conjunction) for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
    // - More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
    // - { data && data.map((item) => <p key={item.id}>{item.title}</p>) }