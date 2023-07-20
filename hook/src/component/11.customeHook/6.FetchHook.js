import { useState, useEffect } from "react";

const FetechDataComponent_6 = () => {
  console.log("Render Parent component!")
  const dataArr = CustomeFetchHook("https://jsonplaceholder.typicode.com/todos");
  const dataObj = CustomeFetchHook("https://jsonplaceholder.typicode.com/todos/1");
  const postArr = CustomeFetchHook("https://jsonplaceholder.typicode.com/posts");
  console.log(dataArr)
  console.log(dataObj)
  console.log(postArr)

  return (
    <>
      <h1>Hi</h1>
      { dataArr && dataArr.map((item) => <p key={item.id}>{item.title}</p>) }
      { JSON.stringify(dataObj) } <br /><br />
      { JSON.stringify(postArr) }
    </>
  );
}
export default FetechDataComponent_6;

const CustomeFetchHook = (url) => {
  console.log("Render Child component!")
  let [detialObject,setData] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const tenData = data.length>1 ? data.slice(0, 6): data;
      setData(tenData)
    }
    fetchData()
  },[])
  return detialObject;
}