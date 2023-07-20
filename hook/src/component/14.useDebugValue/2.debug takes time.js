import { useState,useEffect,useDebugValue } from "react";

const UseDebugValue_2 = () => {
  const item = CustomeFetchHook("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <>
      { item && <li key={item.id}>{item.title}</li>}
    </>
  );
}
export default UseDebugValue_2



const CustomeFetchHook = (url) => {
  let [postObj,setData] = useState(null);

  const filterData = () => {
    for(let i=0;i<=600000000;i++){} // takes time to finish executing for-loop
    return postObj
  }
  
  // // # 1:
  // useDebugValue(filterData())
  // // # 2:
  useDebugValue(postObj, filterData())

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
