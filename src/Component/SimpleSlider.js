import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: true,
    // autoplay: true,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" w-[100%] flex justify-center">
      <div className="w-[100%]">
        <Slider {...settings}>
          <img
            alt="Student Makeen"
            class="w-[100%] rounded-2xl "
            src="https://makeen.ir/images/Slider/e7f2a769-02ab-4134-9b31-15b94fc9e8da-%D8%AF%D8%B1%206%20%D9%85%D8%A7%D9%87(1).jpg"
          ></img>

          <img
            alt="Makeen"
            class="w-[100%] rounded-2xl h-4/5"
            src="https://makeen.ir/images/Slider/74d7ebae-ec02-4961-9205-8fff3a3c9300-%D9%85%DA%A9%DB%8C%D9%86%DB%8C%20%D8%B4%D9%88(1).jpg"
          ></img>

          <img
            class="w-[100%] rounded-2xl"
            alt="Makeen"
            src="https://makeen.ir/images/Slider/82e15b71-7468-429b-8467-7a209962319f-%D9%85%D8%A7%20%D8%A8%D9%87%D8%AA%20%DB%8C%D8%A7%D8%AF%20%D9%85%DB%8C%D8%AF%DB%8C%D9%85(1).jpg"
          ></img>
        </Slider>
      </div>
    </div>
  );
}
