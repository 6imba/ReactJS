import { useState, useEffect } from "react";

const FetechDataComponent_5 = () => {
  console.log("Render Parent component!")
  const data = CustomeFetchHook("https://jsonplaceholder.typicode.com/todos");
  console.log(data)

  return (
    <>
      <h1>Hi</h1>
      { data && data.map((item) => <p key={item.id}>{item.title}</p>) }
    </>
  );
}
export default FetechDataComponent_5;

const CustomeFetchHook =  (url) => {
  console.log("Render Child component!")
  let [detialObject,setData] = useState(null);
  useEffect(()=>{
    const fetch_3 = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const tenData = data.slice(0, 6) ;
      setData(tenData)
    }
    fetch_3()
  },[])
  return detialObject;
}