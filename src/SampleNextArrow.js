import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./App.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="center"
      style={{
        ...style,
        display: "block",
        background: "green",
        zIndex: 1,
        right: -20,
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "8px",
        top: "50%",
      }}
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}
export default SampleNextArrow;
