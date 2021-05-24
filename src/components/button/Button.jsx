import React from "react";

const Button = ({ value, onFinish, width, height, bgColor, color }) => {
  return (
    <button
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        border: "none",
        outline: "none",
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "inherit",
        margin: "40px 0",
        color: color,
        textTransform: "uppercase",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={onFinish}
    >
      {value}
    </button>
  );
};

export default Button;
