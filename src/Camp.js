import React from "react";
import Maken1 from "./assets/img/Maken1.png";
import End from "./Component/End";
export default function Camp() {
  return (
    <div className="flex flex-col">
      <div className="flex  justify-center items-center">
        <img className="flex w-[90%]" src={Maken1}></img>
      </div>
      <div className="flex  justify-center items-center">
        <div className="flex w-[90%] flex-row justify-center items-center">
          <div className="w-[20%] h-screen">
            <div className="flex flex-col fixed w-[200px] bg-white mt-[60px] h-[250px] rounded-lg border-2 border-[#CACBCB]">
              <p
                style={{ fontFamily: "Bold" }}
                className="flex m-2.5 text-slate-500 hover:text-black"

                // className=" mt-5"
              >
                بوت کمپ مکین
              </p>
              <p
                style={{ fontFamily: "Bold" }}
                className="flex m-2.5 text-slate-500 hover:text-black"
              >
                بوت کمپ چیست؟
              </p>
              <p
                style={{ fontFamily: "Bold" }}
                className="flex m-2.5 text-slate-500 hover:text-black"
              >
                فرق بوت کمپ با آموزشگاه
              </p>
              <p
                style={{ fontFamily: "Bold" }}
                className="flex m-2.5 text-slate-500 hover:text-black"
              >
                پروژه محور بودن
              </p>
            </div>
          </div>

          <div className="w-[90%] h-screen">
            <p
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                fontSize: 20,
                margin: 20,
              }}
            >
              بوت کمپ مکین
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#4D6982",
                fontSize: 17,
                marginBottom: 50,
              }}
            >
              امروزه با رشد چشم گیر فضای فناوری اطلاعات در کشور ، نیاز مبرم این
              صنعت به نیروهای متخصص و کاربلد ، روز به روز در حال افزایشه. از طرف
              دیگه اما به دلیل نقص سیستم آموزشی در اکثر دانشگاه ها در یاد دادن
              مهارت های کاربردی، نیروی مورد نیاز شرکت های حوزه فناوری اطلاعات،
              تامین نمیشه. به عبارت ساده تر، بازار کار به شدت دنبال نیروی متخصص
              میگرده اما نیروی مطلبوش رو پیدا نمیکنه. از طرفی فارغ التحصیلان
              رشته های مهندسی کامپیوتر و ... به شدت دنبال کار میگردن و در اکثر
              مواقع پیدا نمیکنن. آکادمی مکین این حفره ی بین بازار کار و کارجو رو
              با دوره های فشرده ی شش ماهه ی پروژه محور اصلاح کرده.
            </p>

            <p
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                fontSize: 20,
                margin: 20,
              }}
            >
              بوت کمپ چیست؟
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#4D6982",
                fontSize: 17,
                marginBottom: 50,
              }}
            >
              بوت کمپ يه محيط يه محيط صميميه، يه جايي که با کمک استاد راهنما تو
              يه مدت مشخص تحت آموزش قرار مي گيريم
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                fontSize: 20,
                margin: 20,
              }}
            >
              فرق بوت کمپ با آموزشگاه
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#4D6982",
                fontSize: 17,
                marginBottom: 50,
              }}
            >
              ) آموزشگاه ها توي بازه محدود (36ساعته) رو براي آموزش اختصاص ميدن
              ولي توي بوت کمپ 540 ساعت کنار مايی و زیر نظر یک استاد راهنما
              (منتور تحت آموزش قرار میگیری توي بوت کمپ مکین علاوه بر آموزش فني
              .کارگاه هاي مفيد و جذابي هم برگزار ميشه .هدف این کارگاه ها ایجاد و
              تقویت . .مهارت هاییه که یک نیروی متخصص و حرفه ای باید در محیط کار
              بلد باشه
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#00213E",
                fontSize: 20,
                margin: 20,
              }}
            >
              دوره های بوت کمپ کاملا پروژه محوره ، یعنی چی؟
            </p>
            <p
              style={{
                fontFamily: "Bold",
                color: "#4D6982",
                fontSize: 17,
                marginBottom: 50,
              }}
            >
              یعنی شما تمام مباحث فنی و مهارت ها رو حین اجرای پروژه های واقعی
              یاد می گیری .این پروژه ها بعدا برات رزومه هم محسوب میشه! و آخر سر
              ، بعد از تموم شدن دوره، یه کارشناس استخدام کنارت قرار میگیره و قدم
              به قدم وضعیت مصاحبه هاتو پیگیری میکنه و بهت مشورت میده که دیگه
              خیالت برای استخدام راحتِ راحت باشه !
            </p>
          </div>
        </div>
      </div>
      <End />
    </div>
  );
}
