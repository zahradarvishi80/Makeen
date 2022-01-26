import data from "../Jsondata/data";
import React from "react";

export default function Status() {
  return (
    
    <div className="flex w-[100%] h-[240px] grid grid-cols-2 mt-10 mb-10  justify-items-center justify-center ">
      {data.map(({ number, startColor, endColor, title, Image }) => {
        return (
          <div className="flex h-30 mt-10 mr-8 justify-end w-[290px] items-center flex-row">
            <div className="flex-col flex justify-items-end mr-5">
              <p className="text-[25px] flex justify-end p-2">{number}</p>
              <p className="text-[17px] w-[100%]  flex"> {title}</p>
            </div>
            <div
              style={{
                background: `linear-gradient(90deg , ${startColor} 0% , ${endColor} 130%)`,
              }}
              className="w-[55px] h-[55px] mt-2 rounded-lg flex p-3"
            >
              <img src={Image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
