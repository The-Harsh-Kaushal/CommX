import React from "react";
import "./CSS/onlineUser.css";
import liveChat from "../img/liveChat.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import OnlineUserHelper from "./OnlineUserHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function User() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"OnlineUser" + (DarkMode ? "" : " darkOU")}>
      <div className="header">
        <img src={liveChat}></img>
        <h1>Online Users</h1>
      </div>
      <div className="searchBar">
        <IconButton>
          <SearchIcon className="darkSI" />
        </IconButton>
        <input placeholder="search" />
      </div>
      <div className="OnlineUC">
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
        <OnlineUserHelper />
      </div>
    </div>
  );
}
