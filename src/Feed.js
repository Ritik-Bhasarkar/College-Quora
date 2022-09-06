import React from "react";
import QueBox from "./QueBox";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* QuestionsBox */}

      <QueBox />

      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default Feed;
