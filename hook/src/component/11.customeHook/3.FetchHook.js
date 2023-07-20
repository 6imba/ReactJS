import { useState, useMemo } from "react";

const FetechDataComponent_3 = () => {
  console.log("Render component!")
  const data = CustomeFetchHook("https://jsonplaceholder.typicode.com/todos");
  console.log(data)

  return (
    <>
      <h1>Hi</h1>
      {/* { data } */}
      { JSON.stringify(data) }
      {/* { data && data.map((item) => <p key={item.id}>{item.title}</p>) } */}
      {/* && operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy. */}
    </>
  );
}
export default FetechDataComponent_3;

// const CustomeFetchHook =  (url) => {
//   let [detialObject,setData] = useState(null);
//   const fetch_3 = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setData(data)
//   }
//   fetch_3()
//   return detialObject;
// }

const CustomeFetchHook =  (url) => {
  let [detialObject,setData] = useState(null);
  useMemo(()=>{
    const fetch_3 = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
    }
    fetch_3()
  },[])
  return detialObject;
}