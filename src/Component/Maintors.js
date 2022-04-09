import React from "react";
import Maintor from "../Jsondata/dataMentors";
import MaintorSlider from "./MaintorSlider";
export default function Maintors() {
  return (
    <div className="w-[100%] mt-40">
      <h2 style={{ fontFamily: "ExtraBold", textAlign: "center" }}>
        منتورهای ما
      </h2>
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
   
      <MaintorSlider />
    </div>
  );
}
