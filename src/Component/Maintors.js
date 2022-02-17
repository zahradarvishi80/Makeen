import React from "react";
import Maintor from "../Jsondata/Maintor";
export default function Maintors() {
  return (
    <div className="w-[100%] mt-40">
      <p style={{ fontFamily: "ExtraBold", textAlign: "center" }}>
        منتورهای ما
      </p>
      <p
        style={{
          fontFamily: "Bold",
          textAlign: "center",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        منتورهای ما بهترین متخصص ها توی زمینه ی کاری خودشون هستن
      </p>
      <div className="w-[100%] h-[300px] bg-[#ECF9FD] rounded-md flex flex-row justify-around">
        {Maintor.map((item) => {
          return (
            <div className="flex flex-col">
              <img src={item.img} />
              <p style={{ fontFamily: "Bold" }}> {item.name}</p>
              <p style={{ fontFamily: "Medium" }}>{item.dore} </p>
              <p style={{ fontFamily: "Medium" }}>{item.Object} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
