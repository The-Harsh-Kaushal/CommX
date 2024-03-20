import React, { useState, useEffect } from "react";
import "./CSS/onlineUser.css";
import liveChat from "../img/liveChat.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import OnlineUserHelper from "./OnlineUserHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Backdrop, CircularProgress, Button } from "@mui/material";

export default function User() {
  const [AllUsers, SetAllUsers] = useState([]);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const SortByName = (array) => {
    return array.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
        return 0;
    })
  };

  const DarkMode = useSelector((state) => state.themekey);
  const fetchUser = () => {
    handleOpen();
    const userData = JSON.parse(localStorage.getItem("userData"));
    const URL = "http://localhost:5000/user/fetchAllUser";
    const headers = {
      "Content-Type": "application/json",
      AuthToken: userData.authtoken,
    };

    axios
      .post(URL, {}, { headers: headers })
      .then((Response) => {
        const sortedData = SortByName(Response.data);

        SetAllUsers(sortedData);

        handleClose();
      })
      .catch((error) => {
        handleClose();
        console.log(error);
      });
  };

  useEffect(() => {
    // Function to run when component is rendered
    fetchUser();

    // Cleanup function (optional)
    // return () => {
    //   console.log("Cleanup function executed");
    // };
  }, []);
  return (
    <div className={"OnlineUser" + (DarkMode ? "" : " darkOU")}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
        {AllUsers.map((element) => {
          return <OnlineUserHelper key={element.name} name={element.name} />;
        })}
      </div>
    </div>
  );
}
