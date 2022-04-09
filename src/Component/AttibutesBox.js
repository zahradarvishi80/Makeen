import React from "react";
import "../Css/App.css";
import Attributes from "../Jsondata/Attributes";
import Icon from "../assets/img/Group 9.png";
import Icon1 from "../assets/img/Group 10.png";
export default function AttibutesBox() {
  return (
    <div className="flex  mb-8 mt-52 flex-col">
      {" "}
      <div className="flex justify-center flex-col justify-items-center">
        <p
          id="ExtraBold"
          className=" flex justify-items-center justify-center mt-5 text-lg font-bold"
        >
          ویژگی های مکین
        </p>
        {/* <img
          src={Icon}
          width={90}
          height={90}
          style={{
            position: "absolute",
            marginLeft: 590,
          }}
        /> */}
        <p
          id="Bold"
          className=" flex justify-items-center justify-center text-lg mt-5 font-bold"
        >
          ویژگی هایی که ما رو از بقیه بوت کمپ ها متفاوت میکنه
        </p>
      </div>
      <div className="grid gap-6 mt-10 mb-10 lg:grid-cols-2 xl:grid-cols-3 h-[100%]">
        {Attributes.map(
          ({ title, discribtion, icon, startColor, endColor, hover }) => {
            return (
              <div
                className={`flex parent z-10 items-center shadow-xl border-2 border-gray-200 rounded-lg h-[200px] justify-around flex-col`}
              >
                <div
                  className={`${hover} w-[380px] hover:motion-safe:animate-spin scale-125  origin-bottom -rotate-12 rounded-lg h-[200px] absolute hidden child `}
                />
                <img
                  style={{
                    background: `linear-gradient(90deg , ${startColor} 0% , ${endColor} 130%)`,
                  }}
                  className="mt-5 p-2 w-[50px] h-[50px] rounded-lg flex"
                  src={icon}
                  alt="icons"
                />
                <p id="bold" className="text-[17px] font-bold flex mt-5 z-20">
                  {" "}
                  {title}
                </p>
                <p
                  id="bold"
                  className="text-[13px] flex mt-2 mb-11 text-center z-20"
                >
                  {discribtion}
                </p>
              </div>
            );
          }
        )}
      </div>
      <style jsx>
        {`
          .parent:hover .child {
            position: absolute;
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
