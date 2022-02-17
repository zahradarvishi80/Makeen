import data from "../Jsondata/data";
import React from "react";
import "../Css/App.css";
export default function Status() {
  return (
    <div className="flex w-[100%] h-[100%] grid grid-cols-2 mt-10 mb-10  justify-items-center justify-center  xl:justify-center xl:grid-cols-4 lg:justify-start lg:justify-items-center">
      {data.map(({ number, startColor, endColor, title, Image }) => {
        return (
          <div className="flex h-[30%] mt-10 justify-end w-[100%] items-center flex-row">
            <div className="flex-col flex justify-items-end mr-5">
              <p
                id="Number"
                className="text-[12px] flex justify-end lg:justify-end p-2 sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[27px]"
              >
                {number}
              </p>
              <p
                id="Number"
                className="text-[10px] w-[100%]  flex sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px]"
              >
                {" "}
                {title}
              </p>
            </div>
            <div
              style={{
                background: `linear-gradient(90deg , ${startColor} 0% , ${endColor} 130%)`,
              }}
              className="w-[40px] h-[40px] mt-2 rounded-lg flex p-3 sm:w-[50px] sm:h-[50px]"
            >
              <img src={Image} alt="icons" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
