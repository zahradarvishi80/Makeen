import React, { useState } from "react";
import { Link } from "react-router-dom";
import End from "./assets/img/Union 5.png";
import Academi from "./assets/img/Academi.png";
import SMS from "./assets/img/SMS.png";
import insta from "./assets/img/Instagram.png";
import Tel from "./assets/img/Tel.png";
import Dor from "./Jsondata/Dor";
export default function About() {
  const data = [
    { img: Tel, sc: "#8094A6", ec: "#E6EAED" },
    { img: SMS, sc: "red", ec: "#E6EAED" },
    { img: insta, sc: "#8094A6", ec: "orange" },
    { img: Tel, sc: "white", ec: "pink" },
    { img: insta, sc: "red", ec: "blue" },
  ];
  return (
    <div className="flex max-w-md mx-auto flex-col container sm:max-w-xl  md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-20xl">
      <div className="flex flex-col mt-16 items-center">
        <p className="mb-3 flex" style={{ fontFamily: "ExtraBold" }}>
          {" "}
          دوره های آکادمی مکین
        </p>
        <p style={{ fontFamily: "Bold", color: "#00213E" }}>
          همه ی دوره هایی که در حال حاضر مکین برگزار می کنه
        </p>
      </div>
      <div className="flex flex-wrap w-[100%] h-[1000px] mt-20 justify-center">
        {Dor.map((item) => {
          return (
            <nav>
              <Link to={`/Desc/${item.information}`} state={{ props: item }}>
                <div
                  style={{
                    // justifyContent: "center",

                    background: `linear-gradient(90deg , ${item.sc} 0% , ${item.ec} 130%)`,
                  }}
                  className="flex flex-col h-[300px] shadow-2xl border-[0.3px] border-[#CACBCB] w-[300px] m-10 rounded-xl justify-center items-center"
                >
                  <img
                    src={item.img}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 10,
                      padding: 20,
                    }}
                  />

                  <div
                    style={{
                      flexDirection: "flex-column",
                    }}
                  >
                    <p style={{ fontFamily: "Bold", marginBottom: 5 }}>
                      {item.name}{" "}
                    </p>
                    <div className="flex flex-row justify-center items-center">
                      <img src={item.pho} className="flex w-6 h-6 m-1" />
                      <p
                        style={{
                          fontFamily: "Medium",
                          color: "#4D6982",
                          fontSize: 13,
                        }}
                      >
                        {item.Expertise}{" "}
                      </p>
                    </div>

                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 95,
                        background: `linear-gradient(90deg , ${item.startColor} 0% , ${item.endColor} 130%)`,
                      }}
                      className="w-[90px] flex h-[27px] rounded-sm justify-center items-center mt-5"
                    >
                      <p
                        style={{
                          fontFamily: "Bold",
                          fontSize: 11,
                          color: `${item.colorText}`,
                        }}
                      >
                        {" "}
                        {item.Text}
                      </p>
                    </div>
                    <div className="flex justify-start w-[270px] h-[65px] mt-5 border-t-2 border-[#CACBCB]  flex-row">
                      <p
                        className="text-slate-500 hover:text-black mt-5"
                        style={{ fontFamily: "Bold" }}
                      >
                        {" "}
                        {item.information}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <nav>
                <Link to="/Regester">
                  <p
                    className="flex mr-[60%] -mt-[21%]"
                    style={{ color: "#00294D", fontFamily: "Bold" }}
                  >
                    {item.Register}
                  </p>
                </Link>
              </nav>
            </nav>
          );
        })}
      </div>
      <div className="mt-20 flex justify-center">
        <img
          src={End}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
        <img src={Academi} className="absolute flex mt-16" />
        <div className="absolute flex w-[950px] h-[100px] mt-36">
          <p
            className="flex"
            style={{
              textAlign: "center",
              fontFamily: "Medium",
              fontSize: 17,
              color: "white",
            }}
          >
            آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های
            شغلی برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از
            متدولوژی آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن
            به رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما
            .بهشون آینده میدیم
          </p>
        </div>
        <div className="absolute flex flex-row justify-around w-[50%] h-[10%] mt-[20%]">
          {data.map((i) => {
            return (
              <div
                className="w-10 h-10 rounded-full flex"
                style={{
                  background: `linear-gradient(90deg , ${i.sc} 0% , ${i.ec} 130%)`,
                  // marginRight: 70,
                  // marginBottom: 50,
                }}
              >
                <img src={i.img} className="p-3 w-30 " />
              </div>
            );
          })}
        </div>
        <div className="flex w-[60%] border-t-2 mt-[27%] absolute border-grey-100 justify-around mb-12 ">
          <p
            className="flex"
            style={{ fontFamily: "Medium", color: "#ECF9FD" }}
          >
            دوره ها
          </p>
          <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>ثبت نام دوره</p>
          <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>
            درخواست همکاری
          </p>
          <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>بوت کمپ</p>
          <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>درباره مکین</p>
          <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>بلاک</p>
        </div>
      </div>
    </div>
  );
}
