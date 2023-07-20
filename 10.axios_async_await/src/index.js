import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import App from './App';
import Blogs from './component/Blogs'
import Post from './component/Post'
import CreatePost from './component/CreatePost';
import UpdatePost from './component/UpdatePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App/>} >
          <Route path="posts" element={<Blogs/>} />
          <Route path="create-post" element={<CreatePost/>} />
          <Route path="post" element={<Post/>} >
            <Route  path=":postId" element={<p>Postid inside post</p>} />
            {/* <Route  path="new" element={<New/>} /> */}
          </Route>
          <Route path="update-post" element={<UpdatePost/>} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
