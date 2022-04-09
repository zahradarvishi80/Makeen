import { BsArrowRight } from "react-icons/bs";
export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="yCenter"
      style={{
        ...style,
        right: "-1%",
        display: "block",
        background: "red",
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "5px",
      }}
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}
