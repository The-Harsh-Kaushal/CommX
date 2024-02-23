import React from "react";
import "./CSS/workArea.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function MessageOther(props) {
  const DarkMode =  useSelector((state)=>state.themekey);
  return (
    <div className="MessageOther">
      <div className="secondLayer">
        <div className="top">
          <div className="IconContainer">
            <div className="Icon">{props.name[0]}</div>
          </div>
          <div className="conver-message">{props.message}</div>
        </div>

        <p className="conver-time">{props.timeStamp}</p>
      </div>
    </div>
  );
}
MessageOther.defaultProps = {
  name: "Random #1",
  message: "just checking things out ",
  timeStamp: "12:00AM",
};
