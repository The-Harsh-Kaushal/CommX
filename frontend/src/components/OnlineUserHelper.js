import React from "react";

export default function OnlineUserHelper(props) {
  return (
    <div className="OnlineUserHelper">
      <div className="Icon">{props.name[0]}</div>
      <div className="Name">{props.name}</div>
    </div>
  );
}
OnlineUserHelper.defaultProps = {
  name: "Test User",
};
