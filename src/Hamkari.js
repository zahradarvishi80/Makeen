import React from "react";
import End from "./Component/End";

export default function Hamkari() {
  return (
    <div className="w-[100%] h-[100%] items-center flex flex-col justify-center mt-10">
      <div className="flex w-[51%]  border-b-2 flex-col border-b-[#CACBCB]">
        <p
          style={{ fontFamily: "Bold", textAlign: "center", color: "#4D6982" }}
        >
          {" "}
          !همکار گرامی با سلام{" "}
        </p>
        <p
          style={{
            fontFamily: "Bold",
            textAlign: "center",
            color: "#4D6982",
            margin: 15,
          }}
        >
          {" "}
          لطفا در صورتی که برای تکمیل تیم خود درخواست جذب نیرو از آکادمی مکین را
          دارید فرم زیر را تکمیل کنید همکاران ما در اولین فرصت با شما تماس
          خواهند گرفت
        </p>
      </div>
      <div className="flex w-[60%] h-[450px] flex-row  justify-center items-center">
        <div className="flex w-[40%] h-[450px] flex-col mt-5">
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
            }}
          >
            نام شرکت
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
            }}
            placeholder="نام شرکت خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            سال تاسیس شرکت
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="سال تاسیس شرکت خود را به صورت 1300/01/01 وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            ایمیل
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="ایمیل خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            تعداد پرسنل
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="تعداد پرسنل خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            ایمیل
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="ایمیل خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>
        </div>

        <div className="flex w-[40%] h-[450px] flex-col mt-5">
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            نام نماینده شرکت
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="نام نماینده شرکت خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            شماره تماس
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="شماره تماس خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            عنوان کاری شرکت
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="عنوان کاری شرکت خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>{" "}
          <label
            style={{
              fontFamily: "Bold",
              color: "#00213E",
              marginRight: 10,
              fontSize: 13,
              // padding: 10,
            }}
          >
            تعداد نیروی استخدامی
          </label>{" "}
          <input
            style={{
              fontFamily: "Medium",
              fontSize: 11,
              // padding: 10,
            }}
            placeholder="تعداد نیروی استخدامی خود را وارد کنید"
            className="flex w-[250px] h-[50px] border-2 border-grey-300 rounded-lg m-2"
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex w-36 h-14 rounded-xl  bg-[#00213E] items-center justify-center ">
          <p
            style={{
              fontFamily: "Bold",
              textAlign: "center",
              color: "white",
            }}
          >
            ثبت درخواست
          </p>
        </button>
      </div>
      <End />
    </div>
  );
}
