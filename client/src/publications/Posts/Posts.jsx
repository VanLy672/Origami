import React, { useEffect, useState } from 'react';
 
 
import './Posts.css';
import Post from './Post/Post';
import postService from '../../services/post-service';
 
export default function Posts(props) {
  const [posts,setPosts] = useState([]);
  const [isRender, SetIsRender] = useState(true);
  useEffect(()=>{
    postService.load(null,10).then(posts => {
      setPosts(posts)
    });
 
  },[isRender]);
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  }
  return (
    <div>
      {posts ?
        <div className="Posts">
          {posts.map((post) =>
            <Post key={post._id} imageUrl="/blue-origami-bird.png" imageAlt="alt" id={post._id} author={post.author}  onRender={()=>SetIsRender(!isRender)}  content={post.content}/>)}
        </div> : <div>Loading...</div>
      }
    </div>
  );
}
