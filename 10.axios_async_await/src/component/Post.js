import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Post() {
  
  const [post,setPost] = useState({})
  const [comments,setComments] = useState([])
  const params = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const resposnePost = await axios(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const resposneComment = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
    setPost(resposnePost.data)
    setComments(resposneComment.data)

  }

  useEffect(()=>{
    fetchData()
  },[])

  const deletePost = async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    if(response.status === 200){
      alert("Post deleted successfully!")
      navigate("/posts")
    }
  }

  return (
    <div>
        <hr />
        <h1>Post Id: {post.id}</h1>
        <h3>User Id: {post.userId}</h3>
        <h5>Title: {post.title}</h5>
        <p>Body: {post.title}</p>
        <Link to={`/update-post?postId=${post.id}&userId=${post.userId}`}><button>Update</button></Link>
        <button onClick={deletePost}>Delete</button>
        <hr /><hr />
        <div>
          <h1>Comments:</h1>
          {
            comments.map((comment,index)=> {
             return(
               <div key={index}>
                <h3>Comment-{comment.id}</h3>
                <h2>Name: {comment.name}</h2>
                <h2>Email: {comment.email}</h2>
                <p>Body: {comment.body}</p>
                <hr /> 
              </div>
            )
            })
          }
        </div>
    </div>
  )
}