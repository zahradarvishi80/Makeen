import React, { useState } from "react";
import "../Css/App.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div>
        <div class="w-[100%] md:h-14 h-6 flex justify-between items-center bg-red-200 md:bg-slate-100 lg:bg-orange-400 xl:bg-white">
          <div
            className="App"
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "red",
            }}
          >
            <nav>
              <Link to="/">
                <p
                  className="text-[0.5rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  صفحه اصلی
                </p>
              </Link>
            </nav>
            <nav>
              <Link to="/about">
                <p
                  className="text-[0.5rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  دوره ها
                </p>
              </Link>
            </nav>

            <nav>
              <Link to="/Regester">
                <button
                // onClick={() => {
                //   setOpenModal(true);
                // }}
                >
                  <p
                    className="text-[0.5rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                    style={{ fontFamily: "Bold" }}
                  >
                    ثبت نام دوره
                  </p>
                </button>
                {/* {openModal && <Regester />} */}
              </Link>
            </nav>
            <nav>
              <Link to="/Hamkari">
                <p
                  className="text-[0.5rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  درخواست همکاری
                </p>
              </Link>
            </nav>
          </div>
          {/* <div className="flex w-10 h-10 rounded-full mr-[42%] absolute bg-red-400 mt-4"></div> */}

          <div
            className="App"
            style={{
              width: "40%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <nav>
              <Link to="/Moshaver">
                <p
                  className="text-[0.6rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  درخواست مشاوره
                </p>
              </Link>
            </nav>
            <nav>
              <Link to={"/Blog"}>
                <p
                  className="text-[0.6rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  بلاگ
                </p>
              </Link>
            </nav>
            <nav>
              <Link to={"/MakeenDesc"}>
                <p
                  className="text-[0.6rem] md:text-xs md:mt-6 lg:text-base xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  درباره مکین
                </p>
              </Link>
            </nav>
            <nav>
              <Link to={"/Camp"}>
                <p
                  className="text-[0.6rem] md:text-xs lg:text-base md:mt-6 xl:text-lg xl:mt-5"
                  style={{ fontFamily: "Bold" }}
                >
                  بوت کمپ
                </p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
