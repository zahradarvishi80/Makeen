import React from "react";
import images from "../assets/img/IMG 1.jpg";
import image from "../assets/img/IMG 2.jpg";
import circle from "../assets/img/Group 44.png";
import Arrow1 from "../assets/img/Arro1.png";
export default function ABOUT() {
  return (
    <div className="flex w-[100%] mt-10 h-[300px] flex-row">
      <div className="w-[50%] h-[300px] flex flex-col">
        <p style={{ fontFamily: "ExtraBold" }}>چرا بوت کمپ مکین؟</p>
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
          src={image}
          alt="image"
          style={{
            position: "absolute",
            width: 270,
            height: 300,
            marginRight: 80,
          }}
        />
        <img
          src={circle}
          style={{
            width: 300,
            height: 300,
            // justifyContent: "flex-end",
            // alignItems: "flex-end",
            marginRight: 250,
          }}
        />
        <img
          src={images}
          alt="images"
          style={{
            width: 200,
            height: 300,
            position: "absolute",
            marginRight: 250,
            marginTop: 120,
          }}
        />
      </div>
    </div>
  );
}
