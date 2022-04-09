import React, { useState } from "react";
import Slider from "react-slick";
import DescMakeen from "./Jsondata/DescMakeen";
import Delete from "./assets/img/Delete.png";
import SMS from "./assets/img/SMS.png";
import insta from "./assets/img/Instagram.png";
import Tel from "./assets/img/Tel.png";
import "./Css/App.css";
import { Link } from "react-router-dom";
export default function Moshaver() {
  const data = [
    { img: Tel, sc: "#8094A6", ec: "#E6EAED", mtn: "@makeenacademy" },
    { img: SMS, sc: "red", ec: "#E6EAED", mtn: "Info@makeen.ir" },
    { img: insta, sc: "#8094A6", ec: "orange", mtn: "021-77188185-6" },
    {
      img: Tel,
      sc: "white",
      ec: "pink",
      mtn: "تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[50%] h-[350px] flex-col rounded-xl shadow-xl mt-[100px] bg-white justify-center items-center">
        <div className="flex flex-row w-[100%] justify-between mt-2 mb-2 ">
          <p style={{ fontFamily: "Bold", fontSize: 20 }}> ارتباط با ما</p>

          <nav>
            <Link to="/about">
              <img
                className="flex"
                src={Delete}
                style={{ width: 15, height: 15 }}
              />
            </Link>
          </nav>
        </div>
        <div className="flex  flex-row w-[100%]">
          <div className="flex w-[60%] flex-col  h-[350px]">
            <p style={{ fontFamily: "Bold", fontSize: 15, color: "#4D6982" }}>
              براي دريافت مشاوره مي توانيد از راه هاي ارتباطی زير استفاده کنيد
            </p>
            {data.map((i) => {
              return (
                <div className="w-[100%]  h-20  flex flex-row">
                  <div className="flex w-[15%] items-center h-20 ">
                    <div
                      className="flex w-12 h-12 rounded-full "
                      style={{
                        background: `linear-gradient(90deg , ${i.sc} 0% , ${i.ec} 130%)`,
                      }}
                    >
                      <img src={i.img} className="flex p-4" />
                    </div>
                  </div>

                  <div className="flex justify-center w-[76%] h-20 flex-col ">
                    <p style={{ fontFamily: "Medium", color: "#00294D" }}>
                      {i.mtn}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-[40%] flex-col h-[350px]">
           
          </div>
        </div>
      </div>
    </div>
  );
}
