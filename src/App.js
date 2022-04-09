import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Component/Header";
import Regester from "./Regester";
import Desc from "./Desc";
import Hamkari from "./Hamkari";
import Camp from "./Camp";
import MakeenDesc from "./MakeenDesc";
import Moshaver from "./Moshaver";
import Blog from "./Blog";
import BlogInfo from "./BlogInfo";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Regester" element={<Regester />} />
        <Route path="Desc/:id" element={<Desc />} />
        <Route path="Camp" element={<Camp />} />
        <Route path="Hamkari" element={<Hamkari />} />
        <Route path="MakeenDesc" element={<MakeenDesc />} />
        <Route path="Moshaver" element={<Moshaver />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="BlogInfo" element={<BlogInfo />} />
      </Routes>
    </div>
  );
}
