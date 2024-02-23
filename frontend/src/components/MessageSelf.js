import React from "react";
import "./CSS/workArea.css";
export default function MessageSelf(props) {
  return (
    <div className="MessageSelf">
      <div className="secondLayer">
      <div className="top">{props.message}</div>
      <div className="bottom">{props.timeStamp}</div>
      </div>
    </div>
  );
}
MessageSelf.defaultProps = {
  message: "  sdgz e geg",
  timeStamp: "12:00AM",
};
