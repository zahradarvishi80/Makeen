import React from "react";
import SimpleSlider from "./Component/SimpleSlider";
import Status from "./Component/Status";
import "./Css/App.css";
import AttibutesBox from "./Component/AttibutesBox";
import Doreha from "./Component/Doreha";
import VideoPlayer from "./Component/VideoPlayer";
import ABOUT from "./Component/ABOUT";
import DescPardakht from "./Component/DescPardakht";
import AboutMakeen from "./Component/AboutMakeen";
import Question from "./Component/Question";
import MaintorSlider from "./Component/MaintorSlider";
import SimpleSlider1 from "./Component/SimpleSlider1";
import Maghalat from "./Component/Maghalat";
import Input from "./Component/Input";
import End from "./Component/End";
export default function Home() {
  return (
    <div className="flex max-w-md mx-auto flex-col container sm:max-w-xl  md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-20xl">
      <SimpleSlider />
      <Status />
      <VideoPlayer />
      <AttibutesBox />
      <Doreha />
      <ABOUT />
      <MaintorSlider />
      <DescPardakht />
      <SimpleSlider1 />
      <AboutMakeen />
      <Question />
      <Maghalat />
      <Input />
      <End />
    </div>
  );
}
