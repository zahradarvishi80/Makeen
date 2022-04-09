import React from "react";
// import images from "../assets/img/IMG 1.jpg";
import Student from "../assets/img/StudentMakeen.png";
import circle from "../assets/img/Group 44.png";
// import backGround from "../assets/img/Image.png";
import MakeenStudent from "../assets/img/MakeenStudent.png";
import Circlebig from "../assets/img/139.png";
import Circle from "../assets/img/140.png";
import Arrow1 from "../assets/img/Arro1.png";
import { Routes, Route, Link } from "react-router-dom";
export default function ABOUT() {
  return (
    <div className="flex w-[100%] mt-52 h-[300px] flex-row">
      <div className="w-[50%] h-[300px] flex flex-col">
     
        <p style={{ fontFamily: "ExtraBold", position: "absolute" }}>
          چرا بوت کمپ مکین؟
        </p>
        <div className="w-[90%] h-[230px] justify-center justify-items-center flex-col">
          <p style={{ fontFamily: "Bold", marginTop: 30 }}>
            بوت کمپ مکین حدود 10 ساله که در حال پرورش نیروهای متخصص و آماده به
            کار برای بازار کاره و از نیازهای بازار کار به خوبی با خبره و میدونی
            که چه مهارت هایی برای استخدام شدن لازمه. ما دوره های مختلفی رو
            برگزار می کنیم که اساتید خیلی از این دوره ها یه روزی خودشون توی مکین
            بودن و این راهو رفتن و حالا متخصص شدن. فقط کافیه همین امروز تصمیم
            خودتو بگیری و با ثبت نام تو یکی از دوره های ما قدم تو راه متخصص شدن
            بذاری.
          </p>
          <div className="w-[100%] h-[50px] flex flex-row mt-10">
            <p style={{ fontFamily: "Bold", marginLeft: 20, fontSize: 15 }}>
              برای شروع رو این دکمه کلیک کن
            </p>
            <img src={Arrow1} style={{ width: 60, height: 20 }}></img>
            <bottun className="w-32 h-10 rounded-md bg-[#00294D] mr-12">
              <p
                style={{
                  fontFamily: "Bold",
                  color: "white",
                  fontSize: 13,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                !همین حالا مکینی شو
              </p>
            </bottun>
          </div>
        </div>
      </div>
      <div className="flex w-[50%] h-[300px]">
        <img
          src={Circlebig}
          style={{
            width: 250,
            height: 250,
            marginRight: 180,
            // margin:150,
            borderRadius: 250,
          }}
        />
        <img
          src={Student}
          style={{
            position: "absolute",
            marginRight: 40,
            width: 250,
            height: 300,
          }}
        />
        <img
          src={MakeenStudent}
          style={{
            position: "absolute",
            marginRight: 200,
            width: 230,
            height: 270,
            marginTop: 130,
          }}
        />
        <img
          src={Circle}
          style={{
            width: 100,
            height: 100,
            marginRight: -290,
            marginTop: 250,
          }}
        />
      </div>
    </div>
  );
}
