import React, { useState } from "react";
import Soal from "../Jsondata/Soal";
export default function Question() {
  const [currentIndex, setCurentIndex] = useState(null);
  return (
    <div>
      <div className="flex w-[100%] bg-[#00294D] mt-36 justify-center items-center h-[80px] rounded-tl-md rounded-tr-md">
        <p
          style={{
            fontFamily: "ExtraBold",
            textAlign: "center",
            color: "white",
          }}
        >
          سوالات متداول شما
        </p>{" "}
      </div>
      <div className="grid flex-row xl:w-[100%] gap-6 lg:grid-cols-2 lg:h-[100%] bg-[#00294D] sm:bg-[#00294D] md:bg-[#00294D] lg:bg-[#00294D] xl:bg-[#00294D] justify-center">
        {Soal.map((item, index) => {
          return (
            <div className="flex flex-row justify-around  w-[400px] xl:w-[540px]  xl:ml-1 sm:w-[500px] md:w-[650px]  md:mt-7 xl:mt-2 xl:mb-1 xl:mr-3 lg:w-[400px]  lg:justify-center lg:items-center lg:mr-5 lg:ml-5 lg:mt-7 lg:mb-6 lg:h-[70px] bg-white mt-16 rounded-lg sm:rounded-sm md:rounded-md xl:justify-between ">
              <button
                onClick={() => {
                  setCurentIndex(index === currentIndex ? null : index);
                }}
                style={{ flexGrow: 1 }}
              >
                <div
                  style={{
                    flexGrow: 1,
                    backgroundColor: "white",
                    // justifyContent: "space-around",
                    // alignItems: "space-around",
                    flexDirection: "flex-row",
                  }}
                >
                  <div
                    style={{
                      background: `linear-gradient(90deg , ${item.scolor} 0% , ${item.ecolor} 130%)`,
                    }}
                    className="w-8 h-8 rounded-md flex mr-3"
                  >
                    <img
                      src={item.img}
                      className="justify-center items-center justify-items-center p-2"
                    />
                  </div>
                  <p
                    className="text-lg font-normal"
                    style={{ fontFamily: "Bold", textAlign: "center" }}
                  >
                    {" "}
                    {item.desc}
                  </p>

                  {index === currentIndex && (
                    <div className="flex rounded-full">
                      <p
                        style={{
                          fontSize: 13,
                          fontFamily: "Bold",
                          color: "#4D6982",
                          textAlign: "center",
                        }}
                      >
                        {item.Acardion}{" "}
                      </p>
                    </div>
                  )}
                </div>

           
              </button>
            </div>

            // <div className="flex flex-col justify-around  w-[400px] xl:w-[540px]  xl:ml-1 sm:w-[500px] md:w-[650px]  md:mt-7 xl:mt-2 xl:mb-1 xl:mr-3 lg:w-[400px]  lg:justify-center lg:items-center lg:mr-5 lg:ml-5 lg:mt-7 lg:mb-6 lg:h-[70px] bg-white mt-16 rounded-lg sm:rounded-sm md:rounded-md xl:justify-between ">
            //   <div className="flex-row justify-around flex">
            //     <div
            //       style={{
            //         background: `linear-gradient(90deg , ${item.scolor} 0% , ${item.ecolor} 130%)`,
            //       }}
            //       className="w-8 h-8 rounded-md flex mr-3"
            //     >
            //       <img
            //         src={item.img}
            //         className="justify-center items-center justify-items-center p-2"
            //       />
            //     </div>
            //     <p
            //       style={{
            //         fontFamily: "Bold",
            //         textAlign: "end",
            //         color: "#00213E",
            //       }}
            //     >
            //       {item.desc}{" "}
            //     </p>
            //     <button
            //       onClick={() => {
            //         setCurentIndex(index === currentIndex ? null : index);
            //       }}
            //     >
            //       <img src={item.Flesh} className="ml-4" />
            //     </button>
            //   </div>
            //   {/* <div className="flex  flex-col"> */}
            //   {index === currentIndex && (
            //     // <div >
            //     <p>{item.Acardion}</p>
            //     // </div>
            //   )}
            //   {/* </div> */}
            // </div>
          );
        })}
      </div>
      <div className="flex w-[100%] bg-[#00294D] justify-center items-center h-[80px] rounded-bl-md rounded-br-md">
        <p
          style={{
            fontFamily: "Regular",
            textAlign: "center",
            color: "white",
          }}
        >
          مشاهده سوالات بیشتر
        </p>{" "}
      </div>
    </div>
  );
}
