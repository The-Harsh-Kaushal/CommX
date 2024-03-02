import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import "./CSS/createGroup.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function CreateGroup() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"CreateGroup" + (DarkMode ? "" : " darkCG")}>
      <div className="secondLayer">
        <input type="text" placeholder="Enter a name"></input>
        <IconButton>
          <DoneOutlineIcon className="IconTick" />
        </IconButton>
      </div>
    </div>
  );
}
