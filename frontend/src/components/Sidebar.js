import React, { useState } from "react";
import "./CSS/sidebar.css";

import ConversationIteam from "./ConversationIteam";
// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { toggleTheme } from "../features/ThemeSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const DarkMode = useSelector((state) => state.themekey);
  const [SShow, SToggle] = useState({
    open: false,
  });
  const SShowToggle = () => {
    SToggle({
      open: !SShow.open,
    });
    console.log(SShow);
  };
  const dispatch = useDispatch();
  const [conversations, SetConversations] = useState([
    {
      id: 1,
      name: "text 1",
      LastMsg: "msg 1",
      TimeStamp: "today",
    },
    {
      id: 2,
      name: "text 2",
      LastMsg: "msg 2",
      TimeStamp: "today",
    },
    {
      id: 3,
      name: "text 3",
      LastMsg: "msg 2",
      TimeStamp: "today",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div
      className={
        "Sidebar_container" +
        (DarkMode ? "" : " dark_mode_sidebar") +
        (SShow.open ? " Show_Sidebar" : "")
      }
    >
      <div className="person">
        <div>
          <IconButton onClick={SShowToggle}>
            <AccountCircleIcon className="LargeIcon" />
          </IconButton>
        </div>

        <div>
          <IconButton
            onClick={() => {
              navigate("User");
            }}
          >
            <PersonAddIcon className="LargeIcon" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className="LargeIcon" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("Create-Group");
            }}
          >
            <AddCircleOutlineIcon className="LargeIcon" />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            <NightlightIcon className="LargeIcon" />
          </IconButton>
        </div>
      </div>


      <div className="search">
        <IconButton>
          <SearchIcon className="LargeIcon" />
        </IconButton>
        <input placeholder="search" />
      </div>
      <div className="conversations">
        {conversations.map((conversation) => (
          <ConversationIteam key={conversation.name} />
        ))}
      </div>
    </div>
  );
}
