import React, { useState } from "react";

import Slider from "react-slick";
// import SampleNextArrow from "./Component/SampleNextArrow";
// import SamplePrevArrow from "./Component/SamplePrevArrow";
// import Net from "./assets/img/Net.png";
// import react from "./assets/img/react.png";
// import SPython from "./assets/img/SPython.png";
import DescMakeen from "./Jsondata/DescMakeen";
// import Vue from "./assets/img/Vue.png";
// import UIUX from "./assets/img/UIUX.png";

import Circle from "./assets/img/dayereh.png";

import Delete from "./assets/img/Delete.png";
import "./Css/App.css";
import { Link } from "react-router-dom";
export default function Regester() {
  const Sex = [{ sex: "آقا" }, { sex: "زن" }];
  const options = [
    {
      label: "دوره React/Reactnative",
      value: "دوره React/Reactnative",
      // img: react,
    },
    {
      label: "دوره .NET",
      value: "دوره .NET",
      // img: Net,
    },
    {
      label: "دوره Vue.js",
      value: "دوره Vue.js",
      // img: Vue,
    },
    {
      label: "دوره Python",
      value: "دوره Python",
      // img: SPython,
    },
    {
      label: "دوره UI/UX",
      value: "دوره UI/UX",
      // img: UIUX,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="flex justify-center">
      <div className="flex w-[70%] h-[500px] rounded-xl mt-10 shadow-xl">
        <div
          className="flex w-[35%] m-5 start rounded-xl items-center justify-center"
          style={{
            background: `linear-gradient(140deg , ${"#37BBEC66"} -30% , ${"#FF792C66"} 100%)`,
          }}
        >
          <div className="w-[97%] h-[50%] ">
            <Slider {...settings}>
              {DescMakeen.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className=" w-[100px] rounded-lg h-[50px] absolute hidden" />
                    <div className="w-[200px] h-[100px] absolute flex ml-20 mt-11">
                      <p
                        style={{
                          fontFamily: "Medium",
                          fontSize: 14,
                          position: "absolute",
                          // marginTop: 10,
                          color: "#4D6982",
                          direction: "rtl",
                          textAlign: "center",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <img src={item.img}></img>
                    <div className="w-[70%] h-[100px] flex -mt-10 flex-row ml-24">
                      <div
                        className="w-[75%] h-[100px] flex-col"
                        style={{ direction: "rtl" }}
                      >
                        <p
                          style={{
                            fontFamily: "Bold",
                            marginTop: 20,
                            marginRight: 10,
                          }}
                        >
                          {item.name}
                        </p>
                        <p style={{ fontFamily: "Bold", marginRight: 10 }}>
                          {item.job}{" "}
                        </p>
                      </div>
                      <img
                        src={item.Image}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          marginTop: 12,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div id="overflow" className="flex flex-col  overflow-y-auto">
          <div className="flex flex-row justify-between">
            <p className="flex mt-10" style={{ fontFamily: "ExtraBold" }}>
              !مکینی شو
            </p>
            <nav>
              <Link to="/about">
                <img
                  className="flex mt-8"
                  src={Delete}
                  style={{ width: 15, height: 15 }}
                />
              </Link>
            </nav>
          </div>
          <div className="flex flex-row justify-around   mt-5">
            <div className="flex flex-col">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                  // padding: 10,
                }}
              >
                {" "}
                نام و نام خانوادگی
              </label>
              <input
                style={{
                  fontFamily: "Medium",
                  fontSize: 11,

                  // padding: 10,
                }}
                placeholder="نام خودتونو کامل وارد کنید"
                className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                }}
              >
                {" "}
                شماره تماس
              </label>{" "}
              <input
                style={{
                  fontFamily: "Medium",
                  fontSize: 11,
                  // padding: 10,
                }}
                placeholder="شماره تماس خود را وارد کنید"
                className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
              ></input>
            </div>
          </div>

          <div className="flex flex-row items-center justify-around mt-5">
            <div className="flex flex-col">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                  // padding: 10,
                }}
              >
                ایمیل
              </label>{" "}
              <input
                style={{
                  fontFamily: "Medium",
                  fontSize: 11,
                  // padding: 10,
                }}
                placeholder="ایمیل خود را وارد کنید"
                className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                }}
              >
                دوره مورد نظر
              </label>
              <select className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2">
                {options.map((option) => (
                  <option
                    className="flex rounded-lg"
                    style={{ fontFamily: "Bold" }}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                marginRight: 10,
                fontSize: 13,
              }}
            >
              آدرس محل سکونت
            </label>{" "}
            <input
              style={{
                fontFamily: "Medium",
                fontSize: 11,
                marginRight: 15,
                marginLeft: 15,
              }}
              placeholder="آدرس خودتون رو وارد کنید"
              className="flex w-[540px] h-[90px]  border-2 border-grey-300 rounded-lg m-2"
            ></input>
          </div>
          <div className="flex flex-row items-center justify-around mt-5">
            <div className="flex flex-col mt-5">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                }}
              >
                تاریخ تولد
              </label>{" "}
              <input
                style={{
                  fontFamily: "Medium",
                  fontSize: 11,
                  marginRight: 15,
                  marginLeft: 15,
                }}
                placeholder="تاریخ تولد را ب صورت 1380/2/18"
                className="flex  w-[250px] h-[50px] border-2 border-grey-300 rounded-lg"
              ></input>
            </div>
            <div className="flex flex-col mt-5">
              <label
                style={{
                  fontFamily: "Bold",
                  color: "#00213E",
                  marginRight: 10,
                  fontSize: 13,
                }}
              >
                جنسیت
              </label>{" "}
              <div className="flex flex-col">
                <select className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2">
                  {Sex.map((option) => (
                    <option
                      className="flex rounded-lg"
                      style={{ fontFamily: "Bold" }}
                      value={option.sex}
                    >
                      {option.sex}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                marginRight: 10,
                fontSize: 13,
              }}
            >
              ویژگی های بارز شما{" "}
            </label>{" "}
            <input
              style={{
                fontFamily: "Medium",
                fontSize: 11,
                marginRight: 15,
                marginLeft: 15,
              }}
              placeholder="چند تا از ویژگی های بارز خودتان را بنویسید"
              className="flex  w-[540px] h-[50px] border-2 border-grey-300 rounded-lg"
            ></input>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button className="flex w-36 h-14 rounded-xl  bg-[#00213E] items-center justify-center ">
              <p
                style={{
                  fontFamily: "Bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                ثبت نام
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
