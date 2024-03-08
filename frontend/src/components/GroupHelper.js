import React from "react";
import { motion } from "framer-motion";

export default function GroupHelper(props) {
  return (
    <motion.div whileHover={{scale: 1.01}}  whileTap={{scale:0.98}} className="GroupHelper"> 
      <div className="Icon">{props.name[0]}</div>
      <div className="Name">{props.name}</div>
    </motion.div>
  );
}
GroupHelper.defaultProps = {
  name: "Test Group",
};
