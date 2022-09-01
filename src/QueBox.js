import React from "react";
import "./QueBox.css";
import { Avatar, Button } from "@mui/material";
//import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

function QueBox() {
  return (
    <div className="queBox">
      <form>
        <div className="queBox__input">
          <Avatar src="https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg" />
          <input placeholder="What's your Query" type="text"></input>
        </div>
        {/* <div className="queBox__inputImageIcon">
          <input
            style={{ display: "none" }}
            // accept="image/png, image/gif, image/jpeg"
            accept="image/*"
            id="queBox_inpur_Image"
            type="file"
          ></input>
          <label htmlFor="choose-file">
            <PhotoSizeSelectActualOutlinedIcon />
          </label>
        </div> */}
        <Button className="queBox_postButton"><h3>post</h3></Button>
      </form>
    </div>
  );
}

export default QueBox;
