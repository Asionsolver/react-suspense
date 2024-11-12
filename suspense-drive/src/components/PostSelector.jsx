import React, { useEffect, useState } from "react";

export const PostSelector = ({onSelectPost}) => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPostsError, setIsPostsError] = useState(null);

  useEffect(() => {
    setIsPostsLoading(true);
    setIsPostsError(null);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data = await response.json();
        if (response.ok) {
          setIsPostsLoading(false);
          setPosts(data);
        } else {
          setIsPostsLoading(false);
          setIsPostsError("Something went wrong while fetching posts");
        }
      } catch (error) {
        setIsPostsLoading(false);
        setIsPostsError(error.message);
      }
    };

    fetchPosts();
  }, []);

  // chose what to render for PostSelector
  let postContent;

  if (isPostsLoading) {
    postContent = <div>Loading posts...</div>;
  } else if (!isPostsLoading && isPostsError) {
    postContent = <div>{isPostsError}</div>;
  } else {
    postContent = (
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    );
  }

    return <div>{postContent}</div>;
};
