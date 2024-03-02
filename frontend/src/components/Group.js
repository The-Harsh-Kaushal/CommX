import React from "react";
import "./CSS/groups.css";
import liveChat from "../img/liveChat.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import GroupHelper from "./GroupHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Group() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"Group" + (DarkMode ? "" : " darkGroup")}>
      <div className="header">
        <img src={liveChat}></img>
        <h1>Avaliable Groups</h1>
      </div>
      <div className="searchBar">
        <IconButton>
          <SearchIcon className="darkSI" />
        </IconButton>
        <input placeholder="search" />
      </div>
      <div className="OnlineUC">
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
        <GroupHelper />
      </div>
    </div>
  );
}
