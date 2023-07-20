// import { useState, useEffect } from "react";

import { useState } from "react";

const FetechDataComponent_2 = () => {
  console.log("Render component!")
  const data = CustomeFetchHook("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
      <h1>Hi</h1>
      { data }
      { JSON.stringify(data) }
      {/* { data && data.map((item) => <p key={item.id}>{item.title}</p>) } */}
      {/* && operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy. */}
    </>
  );
}
export default FetechDataComponent_2;

// const CustomeFetchHook =  (url) => {
//   let detialObject;
//   const promise =  fetch(url)
//   const response = promise.then((response) => {
//                       console.log(response)
//                       return response.json()
//                     })
//   response.then((data) => {
//         console.log(data)
//         detialObject = {...data}
//       })
//   console.log(detialObject)
//   return detialObject;
// }

// const CustomeFetchHook =  (url) => {
//   let detialObject;
//   const promise =  fetch(url)
//   const response = promise.then((response) => {
//                       console.log(response)
//                       return response.json()
//                     })
//   response.then((data) => {
//         console.log(data)
//         detialObject = {...data}
//       })
//   console.log(detialObject)
//   return detialObject;
// }

const CustomeFetchHook =  (url) => {
  let detialObject;
  const fetch_3 = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    detialObject = {...data}
  }
  fetch_3()
  console.log(detialObject)
  return detialObject;
}
