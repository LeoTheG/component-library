import React from "react";

// const MyReactApp = () => <div>Hello</div>;

const MyReactApp = (props) => {
  const { width, height, bgColor, color } = props;
  return (
    <div
      style={{
        width: width || 200,
        height: height || 200,
        backgroundColor: bgColor || "green",
        color: color || "black",
      }}
    >
      Hello
    </div>
  );
};

export default MyReactApp;
