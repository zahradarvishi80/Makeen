import React from "react";
import backGround from "../assets/img/Image.png";
import backGround1 from "../assets/img/Image1.png";
import Circlebig from "../assets/img/139.png";
import Arrow from "../assets/img/Ar.png";
import Circle from "../assets/img/140.png";
export default function AboutMakeen() {
  return (
    <div className="flex w-[100%] h-[280px] mt-20">
      <div className="flex w-[50%] h-[300px]">
        <img
          src={Circlebig}
          style={{ width: 180, height: 180, marginRight: 180, marginTop: 50 }}
        />
        <img
          src={backGround}
          style={{
            position: "absolute",
            marginRight: 40,
            width: 250,
            height: 300,
          }}
        />
        <img
          src={backGround1}
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
            marginRight: -200,
            marginTop: 220,
          }}
        />
      </div>
      <div className="flex w-[50%] h-[280px] flex-col">
        <p style={{ fontFamily: "ExtraBold", marginTop: 40, marginRight: 35 }}>
          متودولوژی خاص آموزشی
        </p>
        <img src={Arrow} style={{ width: 40, marginTop: 10 }} />
        <div className="flex w-[90%] h-[280px]">
          <p style={{ fontFamily: "Bold", marginTop: 20, marginRight: 35 }}>
            اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر
            اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس مشکلاتی
            که توی این مسیر برات ایجاد میشه هم بر بیای. بتونی راه حل های درست
            پیدا کنی و برای موفقیت در محیط.کاری که بعدها استخدام میشی ، مشکلی
            نداشته باشی
          </p>
        </div>
      </div>
    </div>
  );
}
