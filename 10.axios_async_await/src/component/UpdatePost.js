import { useEffect, useState } from 'react';
import {useSearchParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function UpdatePost() {

  const [queryString] = useSearchParams()
  const navigate = useNavigate();
  const [postData,setPost] = useState({});

  const fetchData = async () => {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${queryString.get("postId")}`)
    setPost(response.data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', postData)
    alert("Post Updated!")
    navigate(`/post/${response.data.id}`)
  }

  return (
    <div>
      <hr />
      <h2>Update Post:</h2>
      <form onSubmit={submit}>
        <label htmlFor="title">Title: </label>
            <input id="title" type="text" placeholder='title' defaultValue={postData.title} onChange={(e)=> setPost({...postData,title:e.target.value})} /><br /><br />
        <label htmlFor="body">Body: </label>
            <textarea  id="body" placeholder='body'  rows="4" cols="50"  defaultValue={postData.body} onChange={(e)=> setPost({...postData,body:e.target.value})}/><br /><br />
        <button>Update</button>
        <button type="reset" id="reset">Reset</button>
      </form>
      <hr />
    </div>
  )
}

// react-dom.development.js:86 Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.