import React, { useEffect, useState } from "react";
import fetchPosts from "../api/fetchPosts";

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts?_limit=5");  // return a promise

export const PostSelector = ({ onSelectPost }) => {
  // throw new Promise((res)=>console.log("hello"));
  
  const posts = resource.read();

  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};
