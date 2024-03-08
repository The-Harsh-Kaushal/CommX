import React from "react";
import { motion } from "framer-motion";

export default function OnlineUserHelper(props) {
  return (
    <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}}
    className="OnlineUserHelper">
      <div className="Icon">{props.name[0]}</div>
      <div className="Name">{props.name}</div>
    </motion.div>
  );
}
OnlineUserHelper.defaultProps = {
  name: "Test User",
};
