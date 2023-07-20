import { useState,useEffect,useDebugValue } from "react";

const UseDebugValue_1 = () => {
  const item = CustomeFetchHook("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <>
      { item && <li key={item.id}>{item.title}</li>}
    </>
  );
}
export default UseDebugValue_1



const CustomeFetchHook = (url) => {
  let [postObj,setData] = useState(null);

  // # 1: 
  useDebugValue(postObj)
  // // # 2: when you have multiple debugged value, ReactBrowserDebugger shows those value together inside an array.
  // useDebugValue(postObj)
  // useDebugValue(1)
  // useDebugValue("apple")


  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const tenData = data.length>1 ? data.slice(0, 6): data;
      setData(tenData)
    }
    fetchData()
  },[])
  
  return postObj;
}
