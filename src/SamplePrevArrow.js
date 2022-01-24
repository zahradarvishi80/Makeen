import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./App.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="center"
      style={{
        ...style,
        display: "block",
        background: "white",
        zIndex: 1,
        left: -20,
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "8px",
        // marginTop: 100,

        top: "50%",
        margiRight: 25,
        // transform:transl
      }}
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}
export default SamplePrevArrow;
