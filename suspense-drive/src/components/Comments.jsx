import React from "react";
import { use } from "react";

import { fetchData } from "../utils/data";
export const Comments = ({ postId }) => {

  const comments = use(fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`))

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
