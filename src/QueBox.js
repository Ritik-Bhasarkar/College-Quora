import React, { useState } from "react";
import "./QueBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
//import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

function QueBox() {
  const [postQuery, setPostQuery] = useState("");
  // const [postImage, setPostImage] = useState("");

  const sendQuery = (e) => {
    e.preventDefault();

    db.collection("posts")
      .add({
        displayName: "Zoro",
        userName: "ssssszoro",
        text: postQuery,
        // image:
        //   "https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg",
        avatar:
          "https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg",
      })
      .then(() => {
        console.log("Document successfully written!");
      });

    setPostQuery("");
    // setPostImage("");
  };

  return (
    <div className="queBox">
      <form>
        <div className="queBox__input">
          <Avatar src="https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg" />
          <input
            onChange={(e) => setPostQuery(e.target.value)}
            value={postQuery}
            placeholder="What's your Query"
            type="text"
          ></input>
        </div>
        {/* <div className="queBox__inputImage">
          <input
            onChange={(e) => setPostImage(e.target.value)}
            value={postImage}
            type="file"
          />
        </div> */}

        <Button onClick={sendQuery} className="queBox_postButton">
          <h3>post</h3>
        </Button>
      </form>
    </div>
  );
}

export default QueBox;
