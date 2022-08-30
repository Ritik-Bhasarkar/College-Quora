import React from "react";
import "./QueBox.css";
import { Avatar, Button } from "@mui/material";

function QueBox() {
  return (
    <div className="queBox">
      <form>
        <div className="queBox__input">
          <Avatar src="https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg" />
          <input placeholder="What's your Query" type="text"></input>
        </div>
        <Button>Post</Button>
      </form>
    </div>
  );
}

export default QueBox;
