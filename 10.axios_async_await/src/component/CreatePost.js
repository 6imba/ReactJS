import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

export default function CreatePost() {
  
  const navigate = useNavigate();
  // const [newPost, CreatePost] = useState({title: "",body: "",userId: 3})
  const [newPost, CreatePost] = useState({userId: 3})

  const submit = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    alert("New post created!")
    navigate(`/post/${response.data.id}`)
  }
  

  return (
    <div>
      <hr />
      <h2>Create Post:</h2>
      <form onSubmit={submit}>
        <label htmlFor="title">Title: </label>
            <input id="title" type="text" placeholder='title' onChange={(e)=>CreatePost({...newPost,title:e.target.value})}/><br /><br />
        <label htmlFor="body">Body: </label>
            <textarea  id="body" placeholder='body'  rows="4" cols="50" onChange={(e)=>CreatePost({...newPost,body:e.target.value})}/><br /><br />
        <button>Create</button>
        <button type="reset" id="reset">Reset</button>
      </form>
      <hr />
    </div>
  )
}
