import { BsArrowLeft } from "react-icons/bs";

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="yCenter"
      style={{
        ...style,
        zIndex: 1,
        left: "-1%",
        display: "block",
        background: "blue",
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "5px",
      }}
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}
