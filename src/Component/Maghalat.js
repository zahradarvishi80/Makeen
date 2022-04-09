import React from "react";
// import Info from "./Jsondata/Info.js";
import Info from "../Jsondata/Info.js";
export default function Maghalat() {
  return (
    <div className="flex flex-col mt-28 justify-between w-[100%]">
      <div className="flex flex-row  justify-between">
        <p style={{ fontFamily: "ExtraBold" }}>
          جدیدترین مقالات و مطالب از مکین{" "}
        </p>
        <button>
          <p style={{ fontFamily: "Bold" }}>مشاهده ی همه</p>
        </button>
      </div>
      <div className="flex w-[100%] h-[400px] justify-between">
        {Info.map((item) => {
          return (
            <div className=" mt-5 transition hover:-translate-y-1 hover:scale-110 flex w-[30%] h-[400px] flex-col rounded-lg shadow-2xl border-[#CACBCB] border-2 items-center">
              <img src={item.img} className="w-[90%] h-40 mt-4 shadow-2xl" />
              <div className="flex w-[100%] h-10 justify-start mt-3">
                <div
                  style={{
                    background: `linear-gradient(90deg , ${item.Sc} 0% , ${item.Se} 130%) `,
                    width: `${item.width}`,
                  }}
                  className="flex h-6 rounded-lg mr-4"
                >
                  <div
                    style={{
                      background: `${item.colorfont}`,
                    }}
                    className="flex w-1 h-1 mt-3 mr-1 rounded-full justify-center items-center justify-items-center"
                  ></div>
                  <p
                    style={{
                      fontFamily: "Bold",
                      fontSize: 12,
                      textAlign: "center",
                      marginTop: 5,
                      marginRight: 2,
                      color: `${item.colorfont}`,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="w-[90%] h-20 border-b-2 border-gray-200 flex">
                <p style={{ fontFamily: "Bold" }}>{item.desc}</p>
              </div>
              <div className="w-[100%] h-20 flex-row flex">
                <img src={item.View} className="w-10 h-8 p-3 mt-14"></img>
                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                    fontSize: 12,
                    marginTop: 63,
                  }}
                >
                  {" "}
                  {item.view}{" "}
                </p>

                <img
                  src={item.Calendar}
                  className="flex w-8 h-8 p-3 mt-14"
                ></img>

                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                    marginTop: 63,
                    fontSize: 12,
                  }}
                >
                  {" "}
                  {item.date}{" "}
                </p>
                <img
                  src={item.Ax}
                  className="w-8 h-8 flex rounded-full mr-36 mt-12"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
