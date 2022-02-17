import React from "react";
// import Maintor from "../Jsondata/Maintor";
import DescMakeen from "../Jsondata/DescMakeen";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Slider from "react-slick";
import back from "../assets/img/Group 88.png";

import back1 from "../assets/img/Group 87.png";
export default function Kart() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-[100%] mt-40">
      <p style={{ fontFamily: "ExtraBold", textAlign: "center" }}>
        مکین از زبان مکینی ها
      </p>
      <img style={{ position: "absolute", marginRight: 990 }} src={back} />
      <p
        style={{
          fontFamily: "Bold",
          textAlign: "center",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        نظر فارغ التحصیلان مکین که حالا متخصص شدن درباره ی مکین
      </p>

      <div className="w-[100%] h-[360px] rounded-md flex flex-row justify-around">
        {/* <img style={{ position: "absolute", marginLeft: -500 }} src={back1} /> */}
        {DescMakeen.map((item) => {
          return (
            // <Slider {...settings}>
            <div className="flex flex-col">
              <img src={item.img}></img>
              <div className="w-[15%] h-[100px] absolute flex mr-16 mt-10">
                <p
                  style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    position: "absolute",
                    marginTop: 10,
                    color: "#4D6982",
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <div className="w-[70%] h-[100px] flex -mt-10 flex-row mr-3">
                <img
                  src={item.Image}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    marginTop: 12,
                  }}
                />

                <div className="w-[75%] h-[100px] flex-col">
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
              </div>
            </div>
            // </Slider>
          );
        })}
      </div>
    </div>
  );
}
