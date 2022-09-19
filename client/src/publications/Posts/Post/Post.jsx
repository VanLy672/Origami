import axios from 'axios';
import React, { useState } from 'react';
import './Post.css';

function Post({ imageUrl, imageAlt, children, author,id,content,onRender }) {
  const [isUpdate,setIsUpsate] = useState({
    text:"edit",
    status:true
  });


  const [contentPost, setContentPost] = useState(content);
  const [authorPost, setAuthorPost] = useState(author);
  const deleted = (id)=>{
    axios.delete(`http://localhost:3001/deletePost/${id}`).then(res=>{
      console.log("deleled");
      onRender();
    }).catch(err=>console.log(err))
  }
  const update = (id) =>{
    setIsUpsate({text:"update",status:false});
    if(content !== contentPost){
      axios.put(`http://localhost:3001/updatePost/${id}`,{
        content:contentPost,
        author,
      }).then(res=> onRender()).catch(err=>console.log(err))
    }
  }
  return <div className="Post">
    <img src={imageUrl} alt={imageAlt} />
    <form>
    <input className="description" readOnly={isUpdate.status} value={contentPost}  onChange={(event) => {
            console.log(event.target.value);
            setContentPost(event.target.value);
          }}/>
    </form>
    <div>
      <span>
        <small>Author: </small>
        {author}
      </span>
      <button onClick={()=>update(id)}>{isUpdate.text}</button>
      <button onClick={()=>deleted(id)}>delete</button>
    </div>
    <p >{children}</p>
  </div>;
};

export default Post;