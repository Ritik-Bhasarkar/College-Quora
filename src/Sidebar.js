import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Button from "@mui/material/Button";

function Sidebar() {
  return (
    <div className="sidebar ">
      <FormatQuoteIcon className="Sidebar_quoraIcon">
        {/* <h2>College-Quora</h2> */}
      </FormatQuoteIcon>
      <SidebarOption active Icon={HomeRoundedIcon} text="Home" />
      <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineRoundedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderRoundedIcon} text="Bookmark" />
      <SidebarOption Icon={ListAltRoundedIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityRoundedIcon} text="profile" />
      <SidebarOption Icon={MoreHorizRoundedIcon} text="More" />

      <Button varinat="outlined" className="sidebar__ask" fullWidth>
        <h4>Question</h4>
      </Button>
    </div>
  );
}

export default Sidebar;
