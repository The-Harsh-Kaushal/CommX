import React from "react";
import "./CSS/workArea.css";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function WorkArea() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"workArea_container" + (DarkMode ? "" : " darkWAC")}>
      <div className="title">
        <p className="Icon">t</p>
        <div className="center">
          <div className="conver-title">title#1</div>
          <div className="conver-time">today</div>
        </div>
        <IconButton>
          <DeleteOutlineIcon className="LargeIcon" />
        </IconButton>
      </div>

      <div className="chat-area">
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="tex-input">
        <input type="text" placeholder="Type a message"></input>
        <IconButton>
          <SendIcon className="LargeIcon" />
        </IconButton>
      </div>
    </div>
  );
}
