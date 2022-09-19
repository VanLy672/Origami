import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import Posts from '../Posts/Posts';

import './CreatePost.css';

function CreatePost() {
  const [listOfPosts, setListOfPosts] = useState({isLoad:true,data:[]});
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isRender, SetIsRender] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setListOfPosts({isLoad:true,data:response.data});
    });
  }, [isRender]);

  const createPost = () => {
    Axios.post("http://localhost:3001/createPost", {
      content,
      author,
    }).then((response) => {
      SetIsRender(!isRender);
      console.log("tesst");
    });
  };

  

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Content..."
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author Name..."
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <button onClick={createPost}> Create Post </button>
      </div>
      <Posts limit={3} />

    </div>
    
  );
};

export default CreatePost;