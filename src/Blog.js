import React from "react";
import Tv from "./assets/img/Tevesion.png";
import dayer from "./assets/img/dayer.png";
import Ax from "./assets/img/Sadegi.png";
import Calendar from "./assets/img/Calendar.png";
import View from "./assets/img/View.png";
import Info from "./Jsondata/Info"; 
import Bloog from "./Jsondata/Bloog";
import End from "./Component/End";
export default function Blog() {
  return (
    <div>
      <div className="flex w-[100%] flex-col h-[1900px]">
        <div className="flex flex-col ">
          <p
            style={{
              fontFamily: "ExtraBold",
              color: "#00213E",
              textAlign: "center",
            }}
          >
            بلاگ{" "}
          </p>{" "}
          <p
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            جدیدترین مطالب و مقالات از مکین
          </p>
        </div>
        <div className="flex w-[100%] h-[315px] border-b-[1px] border-b-[#CACBCB] flex-row">
          <div className="flex w-[50%] h-[500px]">
            {" "}
            <img src={Tv} className=" mr-4 w-[90%] h-[60%]"></img>{" "}
          </div>

          <div className="w-[50%] h-[500px] flex-col">
            <div className="flex w-[100%] h-[70px] items-center flex-row bg-white">
              <div
                style={{
                  background: `linear-gradient(90deg , ${"#FFD7C0"} 0% , ${"#FFF2EA"} 130%) `,
                  width: 70,
                }}
                className="flex h-6 rounded-lg mr-4"
              >
                <div
                  style={{
                    background: "#663012",
                  }}
                  className="flex w-1 h-1 mt-3 mr-1 rounded-full justify-center items-center justify-items-center"
                ></div>
                <p
                  style={{
                    fontFamily: "Bold",
                    fontSize: 10,
                    textAlign: "center",
                    marginTop: 5,
                    marginRight: 2,
                    color: "#663012",
                  }}
                >
                  طراحی UI/UX
                </p>
              </div>
              <img
                src={dayer}
                style={{ width: 30, height: 30, margin: 10 }}
              ></img>
              <div className="flex flex-row">
                <img
                  className=" mr-4"
                  src={View}
                  style={{
                    width: 20,
                    height: 10,
                    position: "absolute",
                    marginRight: -35,
                    marginTop: -5,
                  }}
                ></img>{" "}
              </div>{" "}
              <p
                style={{
                  color: "#4D6982",
                  fontFamily: "Medium",
                  fontSize: 12,
                }}
              >
                320
              </p>
              <img
                src={dayer}
                style={{ width: 30, height: 30, margin: 10 }}
              ></img>{" "}
              <div className="flex flex-row">
                <img
                  src={Calendar}
                  className="flex w-10 h-10 absolute -mr-11 p-3.5 -mt-5"
                ></img>
              </div>
              <p
                style={{
                  color: "#4D6982",
                  fontFamily: "Medium",
                  // marginTop: 63,
                  fontSize: 12,
                }}
              >
                1 34 آبان 1400
              </p>
            </div>
            <div className="flex w-[70%] flex-col h-[20px]">
              <p
                style={{
                  color: "#00213E",
                  fontFamily: "Bold",
                  marginTop: 20,
                  // fontSize: 12,
                }}
              >
                چرا طراحان باید به جای استفاده از استفاده کنند؟ + راه px از rem
                حل در فیگما
              </p>
              <p
                style={{
                  color: "#4D6982",
                  fontFamily: "Bold",
                  margin: 10,
                  // fontSize: 12,
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی .می باشد
              </p>
            </div>
            <div className="w-[70%] justify-between flex-row  mt-[150px] h-[50px] flex">
              <div className="w-[40%] h-[50px] flex-row flex">
                <img src={Ax} className="p-2" />
                <p
                  style={{
                    fontFamily: "Bold",
                    color: "#4D6982",
                    marginTop: 10,
                  }}
                >
                  {" "}
                  محمد صادقی کیا
                </p>
              </div>
              <div className="w-[23%] h-[50px] flex">
                <p
                  className="text-[#4D6982] hover:text-[black] "
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    marginTop: 12,
                  }}
                >
                  مشاهده ی ادامه مطلب
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ flexGrow: 1 }} className="w-[100%] h-[60px] flex-row">
          <p
            style={{
              fontFamily: "Bold",
              color: "#94A3B1",
              fontSize: 15,
              // marginTop: 10,
            }}
          >
            {" "}
            دسته بندی ها
          </p>
          <button
            style={{
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
              flexGrow: 1,
            }}
          >
            {" "}
            <p style={{ color: "#663012", fontFamily: "Bold" }}>
              {" "}
              UI/UX طراحی{" "}
            </p>
          </button>
          <button
            style={{
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
              flexGrow: 1,
            }}
          >
            {" "}
            <p style={{ color: "#1C4D5F", fontFamily: "Bold" }}>
              React / React Native
            </p>
          </button>
          <button
            style={{
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
              flexGrow: 1,
            }}
          >
            {" "}
            <p style={{ color: "#00294D", fontFamily: "Bold" }}>Vue.js</p>
          </button>
          <button
            style={{
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
              flexGrow: 1,
            }}
          >
            {" "}
            <p style={{ color: "#663012", fontFamily: "Bold" }}>Python</p>
          </button>
          <button
            style={{
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
              flexGrow: 1,
            }}
          >
            {" "}
            <p style={{ color: "#1C4D5F", fontFamily: "Bold" }}>PHP</p>
          </button>

          <button
            style={{
              flexGrow: 1,
              width: 95,
              height: 30,
              borderWidth: 1,
              borderColor: "#CACBCB",
              borderRadius: 10,
            }}
          >
            {" "}
            <p style={{ color: "#363839", fontFamily: "Bold" }}>.Net</p>
          </button>
        </div> */}
        <div className="grid w-[100%]  lg:grid-cols-3 h-[400px]">
          {Bloog.filter((item) => true).map((item) => {
            return (
              <div className="flex mt-5 mb-10  transition hover:-translate-y-1 hover:scale-110  w-[80%] h-[400px] flex-col rounded-lg shadow-2xl border-[#CACBCB] border-2 items-center justify-center">
                <img src={item.img} className="w-[90%] h-40 mt-4 shadow-2xl" />
                <div className="flex w-[100%] h-10 justify-start mt-3">
                  <div
                    style={{
                      background: `linear-gradient(90deg , ${item.Sc} 0% , ${item.Se} 130%) `,
                      width: `${item.width}`,
                    }}
                    className="flex h-6 rounded-lg mr-4"
                  >
                    <div
                      style={{
                        background: `${item.colorfont}`,
                      }}
                      className="flex w-1 h-1 mt-3 mr-1 rounded-full justify-center items-center justify-items-center"
                    ></div>
                    <p
                      style={{
                        fontFamily: "Bold",
                        fontSize: 12,
                        textAlign: "center",
                        marginTop: 5,
                        marginRight: 2,
                        color: `${item.colorfont}`,
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className="w-[90%] h-20 border-b-2 border-gray-200 flex">
                  <p style={{ fontFamily: "Bold" }}>{item.desc}</p>
                </div>
                <div className="w-[100%] h-20 flex-row flex">
                  <img src={item.View} className="w-10 h-8 p-3 mt-14"></img>
                  <p
                    style={{
                      color: "#4D6982",
                      fontFamily: "Medium",
                      fontSize: 12,
                      marginTop: 63,
                    }}
                  >
                    {" "}
                    {item.view}{" "}
                  </p>

                  <img
                    src={item.Calendar}
                    className="flex w-8 h-8 p-3 mt-14"
                  ></img>

                  <p
                    style={{
                      color: "#4D6982",
                      fontFamily: "Medium",
                      marginTop: 63,
                      fontSize: 12,
                    }}
                  >
                    {" "}
                    {item.date}{" "}
                  </p>
                  <img
                    src={item.Ax}
                    className="w-8 h-8 flex rounded-full mr-36 mt-12"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="flex w-[100%] h-[100px] justify-center items-center">
        <p
          className="flex text-[grey] hover:text-[black]"
          style={{ fontFamily: "Bold" }}
        >
          {" "}
          مطالب بیشتر{" "}
        </p>
      </div>
      <End />
    </div>
  );
}
