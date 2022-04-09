import data from "../Jsondata/data";
import React from "react";
import "../Css/App.css";
export default function Status() {
  return (
    <div className="w-[100%] mt-5 grid grid-cols-2 justify-items-center justify-center  xl:justify-center xl:grid-cols-4 lg:justify-start lg:justify-items-center">
      {data.map(({ number, startColor, endColor, title, Image, color }) => {
        return (
          <div className="flex h-[90%] mt-5 justify-around w-[90%] items-center flex-row">
            <div
              style={{
                background: `linear-gradient(90deg , ${startColor} 0% , ${endColor} 130%)`,
              }}
              className="w-[40px] h-[40px] rounded-lg flex p-3  sm:w-[50px] sm:h-[50px]"
            >
              <img src={Image} alt="icons" />
            </div>
            <div
              className="flex-col flex w-[70%] h-[85%]"
              style={{
                alignItems: "flex-start",
              
              }}
            >
              <p
                style={{
                  fontFamily: "Bold",
                  color: `${color}`,
                  fontSize: 25,
                }}
                id="Number"
                className="text-[12px] flex p-1 lg:justify-end sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[27px]"
              >
                {number}
              </p>
              <p
                style={{ fontFamily: "Medium", color: "#454849" }}
                id="Number"
                className="text-[10px] w-[100%] flex sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px]"
              >
                {" "}
                {title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
