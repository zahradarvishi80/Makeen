import React from "react";
import "./App.css";
import "./tailwind.css";
import Makeen from "./img/makeen.png";
// import SimpleImageSlider from "react-simple-image-slider";
import Group23 from "./img/Group 23.png";
import Group24 from "./img/Group 24.png";
import Group25 from "./img/Group 25.png";
import Group26 from "./img/Group 26.png";
function App() {
  // const images = [
  //   {
  //     url: "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg",
  //   },
  //   {
  //     url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/A_beautiful_nature.jpg",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1587732283006-8d805b497439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  //   },
  //   {
  //     url: "https://images.all-free-download.com/images/graphicwebp/stillhouse_hollow_falls_194542.webp",
  //   },
  // ];
  return (
    <div dir="rtl">
      <div>
        <div class="w-100% h-50 flex justify-between items-center">
          {/* <div
            className="App"
            style={{
              width: "40%",
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p>صفحه اصلی</p>
            <p>دوره ها</p>
            <p>ثبت نام دوره</p>
            <p>درخواست همکاری</p>
          </div> */}
          {/* <div
            className="App"
            style={{
              width: "40%",
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p>درخواست مشاوره</p>
            <p>بلاگ</p>
            <p>درباره مکین</p>
            <p>بوت کمپ</p>
          </div> */}
        </div>
        {/*  */}
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 470,
          // backgroundColor: "blue",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {/* <div>
          <SimpleImageSlider
            width={900}
            height={470}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{ marginTop: 0.2 }}
          />
        </div> */}
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 90,
              backgroundColor: "white",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
              marginTop: -960,
              display: "flex",
            }}
          >
            <div
              style={
                {
                  // justifyContent: "center",
                  // alignItems: "center",
                  // justifyItems: "center",
                }
              }
            >
              {/* <img
                src={Makeen}
                alt="img can not download"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              ></img> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          backgroundColor: "white",
          width: "100%",
          height: 200,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "20%",
            height: 100,
            // backgroundColor: "brown",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>500</p>
            <p>فارغ التحصیل مشغول به کار</p>
          </div>
          <div
            style={{
              width: "25%",
              height: 60,
              backgroundColor: "#CACBCB",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={Group26} alt="img can not download"></img>
          </div>
        </div> */}
      {/* <div
          style={{
            width: "20%",
            height: 100,
            // backgroundColor: "brown",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>500</p>
            <p>فارغ التحصیل مشغول به کار</p>
          </div>
          <div
            style={{
              width: "25%",
              height: 60,
              backgroundColor: "#DAF2FB",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={Group25} alt="img can not download"></img>
          </div>
        </div> */}
      {/* <div
          style={{
            width: "20%",
            height: 100,
            // backgroundColor: "brown",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>500</p>
            <p>فارغ التحصیل مشغول به کار</p>
          </div>
          <div
            style={{
              width: "25%",
              height: 60,
              backgroundColor: "#FFD7C0",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={Group24} alt="img can not download"></img>
          </div>
        </div> */}
      {/* <div
          style={{
            width: "20%",
            height: 100,
            // backgroundColor: "brown",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        > */}
      {/* <div
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>500</p>
            <p>فارغ التحصیل مشغول به کار</p>
          </div> */}
      {/* <div
            style={{
              width: "25%",
              height: 60,
              backgroundColor: "#8094A6",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={Group23} alt="img can not download"></img>
          </div> */}
      {/* </div> */}
    </div>
    // </div>
  );
}

export default App;
