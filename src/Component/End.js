import React from "react";
import Ended from "../assets/img/Union 5.png";
import Academi from "../assets/img/Academi.png";
import SMS from "../assets/img/SMS.png";
import insta from "../assets/img/Instagram.png";
import Tel from "../assets/img/Tel.png";
const data = [
  { img: Tel, sc: "#8094A6", ec: "#E6EAED" },
  { img: SMS, sc: "red", ec: "#E6EAED" },
  { img: insta, sc: "#8094A6", ec: "orange" },
  { img: Tel, sc: "white", ec: "pink" },
  { img: insta, sc: "red", ec: "blue" },
];
export default function End() {
  return (
    <div className="mt-20 flex justify-center">
      <img src={Ended} />
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
          آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های شغلی
          برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از متدولوژی
          آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن به
          رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما .بهشون
          آینده میدیم
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
        <p className="flex" style={{ fontFamily: "Medium", color: "#ECF9FD" }}>
          دوره ها
        </p>
        <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>ثبت نام دوره</p>
        <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>درخواست همکاری</p>
        <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>بوت کمپ</p>
        <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>درباره مکین</p>
        <p style={{ fontFamily: "Medium", color: "#ECF9FD" }}>بلاک</p>
      </div>
    </div>
  );
}
