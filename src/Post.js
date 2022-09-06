import React from "react";
import "./Post.css";
import {Avatar} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";


//use momentJs for time and date

function Post() {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://i.pinimg.com/736x/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headertext">
            <h3>
              Roronoa Zoro
              <span className="post_headerUsername">@roronoazoro</span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Greatest Swordman in the seven seas !</p>
          </div>
        </div>
        <img
          src="https://64.media.tumblr.com/1b6b7e660a207fdf918726141c666754/tumblr_inline_pot4gcv0B81tgk36p_540.jpg"
          alt=""
        />
        <div className="post_footer">
          <ThumbUpOutlinedIcon />
          <ThumbDownAltOutlinedIcon />
          <ChatBubbleOutlineRoundedIcon/>
          <ShareOutlinedIcon/>
        </div>
      </div>
    </div>
  );
}

export default Post;
