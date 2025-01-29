import React, { Suspense, useState } from "react";
import { PostSelector } from " ./components/PostSelector";
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
        <Suspense fallback={<h1>Loading Post...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>

        {selectedPostId &&
          <Suspense fallback={<h1>Loading Comments...</h1>}>
            <Comments postId={selectedPostId} />
          </Suspense>
        }
      </div>
    </div>
  );
}
