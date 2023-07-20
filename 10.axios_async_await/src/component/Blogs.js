import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {

  const [allPost, setPost] = useState([]);

  // Retrive JsonData from API.
  const jsonApi = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async ()=>{
    const response = await axios(jsonApi)
    setPost(response.data)
  }
  useEffect(()=>{
    fetchData()
  }, [])

  // useEffect(async ()=>{
  //   const response = await axios("https://jsonplaceholder.typicode.com/posts")
  //   console.log(response)
  //   setPost(response.data)
  // }, [])

  return (
    <>
      {
        allPost.map((post,index) => {
          return(
            <div key={index}>
              <h3>Post-{post.id}</h3>
              <h5>Title: {post.title.slice(0,14)}
              <Link to={`/post/${post.id}`}>...ReadMore</Link>
              </h5>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

