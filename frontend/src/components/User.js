import React, { useState } from "react";
import "./CSS/onlineUser.css";
import liveChat from "../img/liveChat.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import OnlineUserHelper from "./OnlineUserHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Backdrop , CircularProgress , Button,  } from '@mui/material';

export default function User() {
  const [AllUsers, SetAllUsers] = useState();
  const [AlertContent, SetAlertContent] = useState({
    type : "success",
    message : "Signup Sucessfull"
  })
  const [ShowAlert , SetShowAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  

  const DarkMode = useSelector((state) => state.themekey);
  const fetchUser = ()=>{
     handleOpen();
     const data = {};
     var userData = JSON.parse(localStorage.getItem("userData"));
     const URL = "http://localhost:5000/user/fetchAllUser";
     const header ={ Headers: 
      {"content-type": "application/json",
      "AuthToken" : userData
    } };
    axios.post(URL,data,header).then(Response=>{
        SetAllUsers = Response ;
        handleClose();
    }).catch(error=>{
      handleClose();
      console.log(error);
    })
    }
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
        {
         AllUsers.forEach(element => {
           return <OnlineUserHelper name={element.name} />
         })
          
        }
      </div>
    </div>
  );
}
