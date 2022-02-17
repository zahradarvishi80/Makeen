import react from "react";
import doreha from "../Jsondata/doreha";
import "../Css/App.css";
import Icon from "../assets/Svg/Arrow1.svg";
// import Icon from "../assets/img/Flesh.jpg";
const Doreha = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-[100%] h-[150px] bg-[#001D36] flex-row">
        {/*  */}
        <div className="flex flex-col w-[50%] justify-start">
          <p
            style={{
              fontFamily: "ExtraBold",
              color: "white",
              marginLeft: 270,
              marginTop: 10,
            }}
          >
            دوره های بوت کمپ مکین
          </p>
          <p
            style={{
              fontFamily: "Bold",
              color: "white",
              marginLeft: 100,
              marginTop: 30,
            }}
          >
            در حال حاضر مکین این دوره ها رو برگزار می کنه
          </p>
        </div>
        <div className="flex w-[50%] flex-row justify-around justify-items-center">
          <p
            style={{
              fontFamily: "Regular",
              color: "white",
              // marginLeft: 200,
              marginTop: 40,
            }}
          >
            اطلاعات بیشتر رو از اینجا ببین
          </p>
          {/* <img src={Arro} width={200} height={-5} /> */}
          {/* <Icon width={50} /> */}
          <img src={Icon} width={120} style={{ marginBottom: 30 }} />
          <button
            style={{
              fontFamily: "Bold",
              fontSize: 15,
            }}
            className="w-400 h-10 bg-[#7DD3F2] text-[#00213E] mt-10 rounded-md"
          >
            {" "}
            دوره آکادمی مکین
          </button>
        </div>
      </div>
      <div className="flex w-[100%]  h-[250px] bg-[#001D36] flex-row justify-between">
        {doreha.map((item) => {
          return (
            <div className="flex w-[13%] h-[100%] bg-white rounded-md flex-col transition hover:-translate-y-1 hover:scale-110  duration-600 justify-items-start">
              <img
                src={item.img}
                className="flex w-[70%] h-20 ml-7 mt-7 transition hover:-translate-y-1 hover:scale-110  duration-600"
              ></img>
              <div>
                <p id="font" className="text-center mt-5 font-bold">
                  {" "}
                  {item.title}
                </p>
                <p id="fonts" className="text-center text-sm">
                  {" "}
                  {item.describe}
                </p>
              </div>
              <div
                style={{
                  background: `linear-gradient(90deg , ${item.startC} 0% , ${item.endC} 130%)`,
                  marginRight: 53,
                  marginBottom: 50,
                }}
                className="flex w-20 h-7 absolute bg-slate-500 rounded-md transition hover:-translate-y-1 hover:scale-110  duration-600"
              >
                <p
                  className="font"
                  style={{
                    fontSize: 12,
                  }}
                >
                  {item.label}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Doreha;
