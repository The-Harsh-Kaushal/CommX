import React from "react";
import { useNavigate } from "react-router-dom";

export default function ConversationItem(props) {
  const navigate = useNavigate();
  return (
    <div className="conv-iteam"
    onClick={()=>{navigate('ChatArea')}}
    >
      <div className="left">{props.name ? props.name[0] : ""}</div>

      <div className="mid">
        <div className="nameTitle">{props.name}</div>
        <div className="msg">{props.LastMsg}</div>
      </div>
      <div className="right">{props.TimeStamp}</div>
    </div>
  );
}

ConversationItem.defaultProps = {
  name: "def 1",
  LastMsg: "def 2",
  TimeStamp: "def3 ",
};
