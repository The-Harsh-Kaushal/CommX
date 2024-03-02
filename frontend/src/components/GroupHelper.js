import React from "react";

export default function GroupHelper(props) {
  return (
    <div className="GroupHelper">
      <div className="Icon">{props.name[0]}</div>
      <div className="Name">{props.name}</div>
    </div>
  );
}
GroupHelper.defaultProps = {
  name: "Test Group",
};
