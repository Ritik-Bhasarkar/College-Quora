import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

//use momentJs for time and date

function Post({ displayName, userName, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headertext">
            <h3>
              {displayName}
              <span className="post_headerUsername">{userName}</span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post_footer">
          <ThumbUpOutlinedIcon />
          <ThumbDownAltOutlinedIcon />
          <ChatBubbleOutlineRoundedIcon />
          <ShareOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
