// import React, { useEffect, useState } from "react";
// import DataMentors from "../Jsondata/dataMentors";
// import Slider from "react-slick";
// import NextArrow from "./NextArrow";
// import PrevArrow from "./PrevArrow";
// export default function MaintorSlider() {
//   const [slideIndex, setSlideIndex] = useState("");
//   useEffect(() => {
//     setSlideIndex(0);
//   }, []);
//   var settings = {
//     speed: 500,
//     slidesToShow: 5,
//     Infinity: false,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     centerPadding: "160px",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="w-full container  h-[300px] relative ml-8">

//       <Slider
//         {...settings}
//         centerMode
//         beforeChange={(i, j) => {
//           setSlideIndex(j);
//         }}
//       >
//        {DataMentors.map((items, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col justify-center items-center text-center"
//             >
//               <div className="md:w-auto md:h-auto flex justify-center items-center mx-auto">
//                 <div
//                   style={{
//                     transform: `scale(${
//                       index == slideIndex
//                         ? 1
//                         : index + 1 == slideIndex
//                         ? 0.6
//                         : index - 1 == slideIndex
//                         ? 0.6
//                         : index == slideIndex
//                         ? 1
//                         : index == slideIndex + 6
//                         ? 0.6
//                         : index == slideIndex - 6
//                         ? 0.6
//                         : 0.3
//                     })`,
//                   }}
//                   className="rounded-[50%] relative w-32 h-32 overflow-hidden p-4 transition duration-300"
//                 >
//                   <img alt="مدرس" src={items.img} />
//                   </div>
//               </div>
//               <div>
//                 <p
//                   style={{ opacity: index == slideIndex ? "1" : "0" }}
//                   className="font-bold py-4 transition-opacity duration-300"
//                 >
//                   {items.mentorName}
//                 </p>
//                 <p
//                   style={{ opacity: index == slideIndex ? "1" : "0" }}
//                   className="font-regular py-2 transition-opacity duration-300"
//                 >
//                   {items.title}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// }
import React, { createRef, useEffect, useState } from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import SadeghiKia from "../assets/img/MohammadSadeghiKia.png";
import Solgi from "../assets/img/MohammadSolgi.png";
import SeyedPedram from "../assets/img/SeyedPedram.png";
import AliAsgharAghcheloo from "../assets/img/AliAsgharAghcheloo.png";
import AmirHosssienAlboye from "../assets/img/AmirHosssienAlboye.png";
import ArashRahimi from "../assets/img/ArashRahimi.png";
import Momeni from "../assets/img/Momeni.png";
const MaintorSlider = () => {
  const [carouselIndex, setCarouselIndex] = useState("");
  const sliderRef = createRef();

  useEffect(() => {
    setCarouselIndex(0);
  }, []);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    speed: 500,
    slidesToShow: 5,
    Infinity: false,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          className: "center",
          centerPadding: "133px",
        },
      },
      {
        breakpoint: 570,
        settings: {
          className: "center",
          centerPadding: "24%",

          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    {
      img: SadeghiKia,
      name: "محمد صادقی کیا",
      course: "UI/UX دوره ی",
      position: "مدیر آکادمی مکین",
      text: 0,
    },
    {
      img: SeyedPedram,
      name: "سید پدرام میرشاه ولایتی",
      course: "Vue.js دوره ی",
      position: "موسسه ایده آل رسانه مکین",
      text: 1,
    },
    {
      img: Solgi,
      name: "محمدجواد سلگی",
      course: "React/ReactNative دوره ی",
      position: "رادوین تجارت خاورمیانه",
      text: 2,
    },
    {
      img: "/static/images/avatar4-min.jpg",
      name: "علیرضا مومنی",
      course: ".NET دوره ی",
      position: "بهین راهکاران پژوهش و فناوری",
      text: 3,
    },
    {
      img: AmirHosssienAlboye,
      name: "امیرحسین آل احمد",
      course: "Python دوره ی",
      position: "ابر آروان",
      text: 4,
    },
    {
      img: ArashRahimi,
      name: "آرش رحیمی",
      course: "PHP دوره ی",
      position: "آسان پرداخت (آپ)",
      text: 5,
    },
    {
      img: AliAsgharAghcheloo,
      name: "علی اصغر آقچلو",
      course: "React / React Native دوره ی",
      position: "موسسه ایده آل رسانه مکین",
      text: 6,
    },
  ];

  return (
    <div className="w-full container mx-auto h-[300px] relative mt-80">
      <Slider
        {...settings}
        ref={sliderRef}
        centerMode
        beforeChange={(i, j) => {
          setCarouselIndex(j);
        }}
      >
        {images.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <div className="md:w-auto md:h-auto flex justify-center items-center mx-auto">
                <div
                  style={{
                    transform: `scale(${
                      index == carouselIndex
                        ? 1
                        : index + 1 == carouselIndex
                        ? 0.6
                        : index - 1 == carouselIndex
                        ? 0.6
                        : index == carouselIndex
                        ? 1
                        : index == carouselIndex + 6
                        ? 0.6
                        : index == carouselIndex - 6
                        ? 0.6
                        : 0.3
                    })`,
                  }}
                  className="rounded-[50%] relative w-32 h-32 overflow-hidden p-4 transition duration-300"
                >
                  <img alt="مدرس" src={items.img} />
                </div>
              </div>
              <div>
                <p
                  style={{ opacity: index == carouselIndex ? "1" : "0" }}
                  className="font-bold py-4 transition-opacity duration-300"
                >
                  {items.name}
                </p>
                <p
                  style={{ opacity: index == carouselIndex ? "1" : "0" }}
                  className="font-regular py-2 transition-opacity duration-300"
                >
                  {items.course}
                </p>
                <p
                  style={{ opacity: index == carouselIndex ? "1" : "0" }}
                  className="font-light transition-opacity duration-300"
                >
                  {items.position}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MaintorSlider;
