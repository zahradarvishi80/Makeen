import React from "react";
import { Link, useLocation } from "react-router-dom";
import Saat from "./assets/img/Saat.png";
import Tagvim from "./assets/img/Taghvim.png";
import users from "./assets/img/users.png";
import Book from "./assets/img/Book.png";
import End from "./Component/End.js";
import FF from "./assets/img/FF.png";
import dayer from "./assets/img/dayer.png";
// const IMAGES = [
//   { IMAGES: Saat },
//   { IMAGES: Tagvim },
//   { IMAGES: users },
//   { IMAGES: Book },
//   { IMAGES: dayer },
// ];
export default function Desc() {
  const location = useLocation();
  return (
    <div className="flex h-[100%] justify-center items-center flex-col">
      <div className="w-[100%] flex h-[100%] justify-center mt-16">
        <div className="w-[60%] h-[55%] flex flex-col shadow-2xl border-2 border-[#CACBCB] rounded-2xl">
          <div className="flex m-5 w-[100%] h-[100px] justify-between">
            <div className="flex w-[50%]">
              <img
                className="w-[100px] h-20 flex"
                src={location.state.props.pho}
              ></img>
              <p
                style={{ fontFamily: "Medium", color: "#4D6982", fontSize: 15 }}
                className="flex mt-10"
              >
                {location.state.props.Expertise}
              </p>
            </div>
            <div className="flex">
              <img
                className="w-16 h-16 flex mt-4 ml-5"
                src={location.state.props.img}
              />
              <p
                style={{ fontFamily: "Bold", color: "#4D6982", fontSize: 15 }}
                className="mt-10 ml-6"
              >
                {" "}
                {location.state.props.name}{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[100%]  justify-center items-center flex flex-row">
              <div className="flex  w-[40%] flex-col h-[30%]">
                <div className="flex w-[90%] mt-5 mr-5 h-[60px] bg-[#EDEEEE] border-2 border-[#EDEEEE] rounded-xl">
                  <img
                    src={dayer}
                    style={{ width: 35, height: 35, margin: 10 }}
                  ></img>
                  <img
                    src={Saat}
                    className="m-[17px]"
                    style={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                    }}
                  ></img>

                  <div className="flex w-[80%] justify-between mt-4">
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      طول دوره
                    </p>
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      {location.state.props.period}
                    </p>
                  </div>
                </div>

                <div className="flex w-[90%] flex-row mt-5 mr-5 h-[60px] bg-[#EDEEEE] border-2 border-[#EDEEEE] rounded-xl">
                  <img
                    src={dayer}
                    style={{ width: 35, height: 35, margin: 10 }}
                  ></img>
                  <img
                    src={Tagvim}
                    className="m-[17px]"
                    style={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                    }}
                  ></img>

                  <div className="flex w-[80%] justify-between mt-4">
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      شروع دوره
                    </p>
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {location.state.props.start}{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[60%]  flex-col h-[30%]">
                <div className="flex w-[90%] mt-5 mr-5 h-[60px] bg-[#EDEEEE] border-2 border-[#EDEEEE] rounded-xl">
                  <img
                    src={dayer}
                    style={{ width: 35, height: 35, margin: 10 }}
                  ></img>
                  <img
                    src={users}
                    className="m-[17px]"
                    style={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                    }}
                  ></img>

                  <div className="flex w-[100%] justify-between mt-4">
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      نحوه برگزاری
                    </p>
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      {location.state.props.bargozari}{" "}
                    </p>
                  </div>
                </div>
                <div className="flex w-[90%] mt-5 mr-5 h-[60px] bg-[#EDEEEE] border-2 border-[#EDEEEE] rounded-xl">
                  <img
                    src={dayer}
                    style={{ width: 35, height: 35, margin: 10 }}
                  ></img>
                  <img
                    src={Book}
                    className="m-[17px]"
                    style={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                    }}
                  ></img>

                  <div className="flex w-[100%] justify-between mt-4">
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      پیش نیاز
                    </p>
                    <p
                      style={{
                        fontFamily: "Bold",
                        color: "#00213E",
                        fontSize: 13,
                      }}
                    >
                      {location.state.props.pish}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[100%] h-[100px] border-t-2 border-t-[#CACBCB] mt-10 justify-between">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  // marginRight: 95,
                  background: `linear-gradient(90deg , ${location.state.props.startColor} 0% , ${location.state.props.endColor} 130%)`,
                }}
                className="w-[120px] flex h-[35px] rounded-lg justify-center items-center m-5"
              >
                <p
                  style={{
                    fontFamily: "Bold",
                    fontSize: 14,
                    color: `${location.state.props.colorText}`,
                  }}
                >
                  {" "}
                  {location.state.props.Text}
                </p>
              </div>
              <nav>
                <Link to="/Regester">
                  <div className="flex m-9">
                    <p
                      className="text-slate-500 hover:text-black"
                      style={{
                        fontFamily: "Bold",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      {location.state.props.Register}{" "}
                    </p>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <nav>
          <Link to={"/About"}>
            <img
              src={dayer}
              style={{ width: 35, height: 35, margin: 10 }}
            ></img>
            <img
              className="flex w-4 h-4 absolute mr-5 -mt-[2.5%]"
              src={FF}
            ></img>{" "}
          </Link>
        </nav>
      </div>
      <div className="flex w-[55%] flex-col h-[100%] ml-14">
        <p
          style={{
            color: "#00213E",
            fontFamily: "Bold",
            fontSize: 20,
            margin: 35,
          }}
        >
          {" "}
          {location.state.props.title}{" "}
        </p>
        <p style={{ color: "#4D6982", fontFamily: "Bold" }}>
          {location.state.props.explain}
        </p>
        <div className="flex justify-center items-center">
          <img
            className="flex  w-[97%] mt-10 mb-10  shadow-2xl h-[70%]"
            src={location.state.props.Images1}
          />
        </div>
        <div className="flex w-[100%] flex-col">
          <p style={{ fontFamily: "Bold", color: "#00213E" }}>
            {location.state.props.How}{" "}
          </p>
          <p
            style={{
              color: "#4D6982",
              fontFamily: "Bold",
              fontSize: 14,
              margin: 20,
            }}
          >
            {location.state.props.Humen}
          </p>
        </div>

        <p style={{ fontFamily: "Bold", fontSize: 20 }}> آنچه می آموزید</p>
        <div className="flex flex-row justify-around mt-10  w-[100%] mb-10 h-[500px]">
          <div className="flex w-[40%] h-[60%] flex-col border-2 border-[#CACBCB] shadow-2xl rounded-xl">
            <p
              style={{
                color: "#00213E",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 10,
              }}
            >
              مباحث فنی
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.One}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.Two}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.Three}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.Four}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.Five}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 5,
              }}
            >
              {location.state.props.Six}{" "}
            </p>
          </div>

          <div className="flex w-[40%] h-[60%] flex-col border-2 border-[#CACBCB] shadow-2xl rounded-xl">
            <p
              style={{
                color: "#00213E",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 10,
                margin: 10,
              }}
            >
              {" "}
              کارگاه آموزشی
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.first}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.second}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.third}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.fourth}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.fives}{" "}
            </p>
            <p
              style={{
                color: "#4D6982",
                fontFamily: "Bold",
                fontSize: 16,
                margin: 7,
              }}
            >
              {location.state.props.sixes}{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <End /> */}
    </div>
  );
}
