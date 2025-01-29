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
        <ErrorBoundary fallback={<h1>Error fetching posts.</h1>}>
          <Suspense fallback={<h1>Loading Post...</h1>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>


        {selectedPostId &&
          <ErrorBoundary fallback={<h1>Error fetching comments.</h1>}>
            <Suspense fallback={<h1>Loading Comments...</h1>}>
              <Comments postId={selectedPostId} />
            </Suspense>
          </ErrorBoundary>
        }

      </div>
    </div>
  );
}
