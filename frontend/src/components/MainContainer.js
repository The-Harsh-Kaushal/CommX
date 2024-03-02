import React from "react";
import { Outlet } from "react-router-dom";
import "./CSS/mainCont.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function MainContainer() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"mainContainer" + (DarkMode ? "" : " darkMC")}>
      <Sidebar />

      <Outlet />
    </div>
  );
}
