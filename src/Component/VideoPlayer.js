import React from "react";
import row from "../assets/img/row.png";
import ReactPlayer from "react-player";
export default function VideoPlayer() {
  return (
    <div>
      <div className=" flex-row flex justify-end">
        <div className="w-[50%] h-[300px]  rounded-tr-xl rounded-br-xl justify-start items-start justify-items-start"></div>
        <div className="w-[50%] h-[300px] rounded-tr-xl rounded-br-xl justify-start items-start justify-items-start">
          <ReactPlayer
            playing={false}
            loop={false}
            controls={false}
            light={true}
            playbackRate={1}
            width={400}
            height={250}
            playIcon
            style={{
              marginRight: 80,
              position: "absolute",
              marginTop: 190,
              // borderRadius: 30,
            }}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
      </div>
      <div className=" flex-row flex justify-end">
        <div className="w-[50%] h-[300px] bg-orange-100 rounded-tr-xl rounded-br-xl">
          <p
            style={{ fontFamily: "ExtraBold", marginRight: 60, marginTop: 40 }}
          >
            {" "}
            بوت کمپ چیه؟
          </p>
          <img src={row}></img>
          <div className="w-[86%]  mb-36 flex">
            <p style={{ fontFamily: "Bold", marginRight: 50 }}>
              همیشه برای اینکه بخوایم وارد محیط جدیدی بشیم و بهش اعتماد کنیم
              بهترین راه اینه که بشینیم پای حرف کسایی که خودشون توی اون محیط
              بودن. اگرشما هم دوست دارید بدونید نظر مکینی ها نسبت به آکادمی مکین
              چیه! یا دوست داری با مدیر آکادمی و اساتیدش آشنا بشی یادوست !داری
              از نقشه ی راه مکین مطلع بشی این فیلم رو از دست نده
            </p>
          </div>
        </div>

        <div className="w-[50%] h-[300px] bg-orange-100 rounded-tl-xl rounded-bl-xl justify-around flex flex-row">
          {/* <div className="w-[50%] h-[300px] flex bg-red-600"></div> */}
          <ReactPlayer
            playing={false}
            loop={false}
            controls={false}
            light={true}
            playbackRate={1}
            width={100}
            height={70}
            playIcon
            style={{ marginTop: 200 }}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
          <ReactPlayer
            playing={false}
            loop={false}
            controls={false}
            light={true}
            playbackRate={1}
            width={100}
            height={70}
            playIcon
            style={{ marginTop: 200 }}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
          <ReactPlayer
            playing={false}
            loop={false}
            controls={false}
            light={true}
            playbackRate={1}
            width={100}
            height={70}
            playIcon
            style={{ marginTop: 200 }}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
      </div>
    </div>
  );
}
