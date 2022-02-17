import React from "react";
import Art from "../assets/img/Art.png";
import Arrow from "../assets/img/Ar.png";
export default function DescPardakht() {
  return (
    <div className="flex w-[100%] h-[400px] mt-20">
      <div className="flex w-[50%] h-[400px] flex-col justify-center">
        <div className="flex w-[84%] h-[300px] justify-center justify-items-center flex-col">
          <p
            style={{ fontFamily: "ExtraBold", marginRight: 35, marginTop: 20 }}
          >
            پرداخت قسطی
          </p>
          <img src={Arrow} style={{ width: 40, marginTop: 10, }} />
          <p style={{ fontFamily: "Bold", marginRight:50,}}>
            ما توی آکادمی مکین برای اینکه هیچ کس به خاطر مشکل مالی از شرکت توی
            دوره ها جا نمونه ، این امکان رو برای دانشجوهامون فراهم کردیم که
            بتونن همه ی هزینه های دوره رو به صورت قسطی توی 20 ماه .پرداخت کنن
          </p>
        </div>
      </div>
      <div className="flex w-[50%] h-[400px]">
        <img src={Art} width={1300} height={800}></img>
      </div>
    </div>
  );
}
