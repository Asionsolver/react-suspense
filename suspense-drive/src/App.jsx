import React, { useState } from "react";
import { PostSelector } from "./components/PostSelector";
import { Comments } from "./components/Comments";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const handleSelectPost = (event) => {
    setSelectedPostId(event.target.value);
  };
  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>
      <div>
        <PostSelector onSelectPost={handleSelectPost} />
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </div>
  );
}
