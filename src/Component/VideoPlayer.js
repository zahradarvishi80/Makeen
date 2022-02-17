import React from "react";
import Arrow from "../assets/img/Arrow.png";
export default function VideoPlayer() {
  return (
    <div className="mt-10 rounded-lg flex-row flex justify-end">
      <div className="w-[50%] h-[250px] bg-orange-100 rounded-sm">
        <p style={{ fontFamily: "ExtraBold", marginRight: 60 }}>
          {" "}
          بوت کمپ چیه؟
        </p>
        <img src={Arrow}></img>
        <p style={{ fontFamily: "Bold", marginRight: 50 }}>
          همیشه برای اینکه بخوایم وارد محیط جدیدی بشیم و بهش اعتماد کنیم بهترین
          راه اینه که بشینیم پای حرف کسایی که خودشون توی اون محیط بودن. اگرشما
          هم دوست دارید بدونید نظر مکینی ها نسبت به آکادمی مکین چیه! یا دوست
          داری با مدیر آکادمی و اساتیدش آشنا بشی یادوست !داری از نقشه ی راه مکین
          مطلع بشی این فیلم رو از دست نده
        </p>
      </div>
      <div className="w-[50%] h-[250px] bg-orange-100">
        {/* <div>
        <Player style={{ width: 10, height: 10 }}>
          <source src="https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame" />
        </Player>
      </div> */}
      </div>
    </div>
  );
}
