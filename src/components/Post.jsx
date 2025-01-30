import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {

    const [post,setPost] = useState({});

   async function getPost(){
        const post_number = Number(Math.random() * 100).toFixed(0);
        // const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_number}`);

        console.log(post_number);
        const result = await axios({
            method :'get',
            url : `https://jsonplaceholder.typicode.com/posts/${post_number}`
        });
        const data = await result;
        console.log(data);
        setPost(data.data);
    }

    useEffect(()=>{
        getPost();
    },[])

  return (
    <div>
        <h1>Post</h1>
        <p>title {post.title} </p>
        <p>body {post.body} </p>
    </div>
  )
}

export default Post