import React from "react";
import { useNavigate } from "react-router-dom";
import { motion }from "framer-motion"
export default function ConversationItem(props) {
  const navigate = useNavigate();
  return (
    <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98 }}
      className="conv-iteam"
      onClick={() => {
        navigate("ChatArea");
      }}
    >
      <div className="left">{props.name ? props.name[0] : ""}</div>

      <div className="mid">
        <div className="nameTitle">{props.name}</div>
        <div className="msg">{props.LastMsg}</div>
      </div>
      <div className="right">{props.TimeStamp}</div>
    </motion.div>
  );
}

ConversationItem.defaultProps = {
  name: "def 1",
  LastMsg: "def 2",
  TimeStamp: "def3 ",
};
