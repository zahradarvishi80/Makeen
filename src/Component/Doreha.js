import react from "react";
import doreha from "../Jsondata/doreha";
import "../Css/App.css";
import Icon from "../assets/Svg/Arrow1.svg";
// import Icon from "../assets/img/Flesh.jpg";
const Doreha = () => {
  return (
    <div className="flex flex-col mt-40">
      <div className="flex w-[100%] h-[170px] bg-[#001D36] flex-row">
        {/*  */}
        <div className="flex flex-col w-[50%] justify-start">
          <p
            style={{
              fontFamily: "ExtraBold",
              color: "white",
              marginRight: 100,
              marginTop: 50,
            }}
          >
            دوره های بوت کمپ مکین
          </p>
          <p
            style={{
              fontFamily: "Bold",
              color: "white",
              // marginRight: 10,
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
          <img src={Icon} width={100} style={{ marginBottom: 70 }} />
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
      <div className="flex w-[100%]  h-[250px] bg-[#001D36] flex-row justify-around">
        {doreha.map((item) => {
          return (
            <div className="flex parent w-[13%] h-[94%] mt-3 bg-white rounded-md flex-col transition hover:-translate-y-1 hover:scale-110  duration-600 justify-items-start">
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
                  marginRight: 70,
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
                <p
                  className="child hidden"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 10,
                    marginTop: 220,
                    marginRight: 30,
                  }}
                >
                  {" "}
                  بیشتر بدانید
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .parent:hover .child {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};
export default Doreha;
