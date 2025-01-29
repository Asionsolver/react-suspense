import React from "react";
import { useEffect, useState } from "react";
export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [isCommentsError, setIsCommentsError] = useState(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    setIsCommentsError(null);

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const data = await response.json();
        if (response.ok) {
          setIsCommentsLoading(false);
          setComments(data);
        } else {
          setIsCommentsLoading(false);
          setIsCommentsError("Something went wrong while fetching comments");
        }
      } catch (error) {
        setIsCommentsLoading(false);
        setIsCommentsError(error.message);
      }
    };

    fetchComments();
  }, [postId]);

  let commentsContent;
  if (isCommentsLoading) {
    commentsContent = <div>Loading comments...</div>;
  } else if (!isCommentsLoading && isCommentsError) {
    commentsContent = <div>{isCommentsError}</div>;
  } else {
    commentsContent = (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Comments</h2>
      <div>{commentsContent}</div>
    </div>
  );
};
