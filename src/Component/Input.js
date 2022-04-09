import React from "react";
import Moshak from "../assets/img/Group 110.png";
import Moshak1 from "../assets/img/Group 113.png";
// import Arrow22 from "../.assets/img/Arrow22.png";
import Kart from "../assets/img/Kart.png";
export default function Input() {
  return (
    <div className="flex mt-28 flex-col rounded-lg">
      <img
        src={Moshak}
        className="w-[96px] h-[73px] absolute -mt-5 mr-10"
      ></img>
      <p
        style={{ fontFamily: "ExtraBold", fontSize: 20 }}
        className="absolute mr-28 mt-16"
      >
        !با مکين همراه شو
      </p>
      <div className="w-[380px] h-12 absolute mr-28 mt-32">
        <p
          // className="absolute mr-28 mt-24"
          style={{ fontFamily: "Bold", fontSize: 18 }}
        >
          براي اطلاع از اخبار و برگزاري دوره هاي مکين در خبرنامه عضو شويد
        </p>
      </div>
      <img src={Kart} className="bg-slate-300" />
      <img
        src={Moshak1}
        className="w-[54px] h-[41px] absolute mr-[78%] mt-10"
      ></img>
      <div className="flex w-[300px] h-[50px] absolute mr-[45%] mt-10 flex-row">
        <p style={{ fontFamily: "Bold", color: "#4D6982" }}>
          {" "}
          ایمیل خودتونو اینجا وارد کنید
        </p>
        {/* <img src={Arrow22} className="w-16 h-10 mr-2" /> */}
      </div>
      <div className="flex absolute w-[30%] h-[10%] mr-[47%] mt-24">
        {" "}
        <input className="w-52 h-10 bg-white border-gray-400 border-2 border-outline-none flex absolute "></input>
        <button className="w-20 rounded-md h-10 bg-[#FF8641] flex absolute mr-[55%]">
          <p
            style={{
              fontFamily: "Bold",
              // textAlign: "center",
              color: "white",
              textAlign: "center",
              marginTop: 6,
              marginRight: 10,
            }}
          >
            {" "}
            عضویت
          </p>
        </button>
      </div>
    </div>
  );
}
