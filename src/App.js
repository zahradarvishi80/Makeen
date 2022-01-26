import React from "react";
import SimpleSlider from "./Component/SimpleSlider";
import Status from "./Component/Status";
import "./Css/App.css";
import data from "./Jsondata/data";
export default function App() {
  return (
    <div>
      <div className=" w-[100%] flex justify-center">
        <SimpleSlider />
      </div>
      <Status />
      <div className="flex bg-violet-500 mt-9  w-[100%] h-[150px]"></div>
    </div>
  );
}
