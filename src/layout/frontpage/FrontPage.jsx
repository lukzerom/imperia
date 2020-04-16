import React from "react";
import TopColumns from "./TopColumns.jsx";
import BigChair from "./BigChair.jsx";
import ThreeColumns from "./ThreeColumns.jsx";
import Implementation1 from "./Implementation1";
import Implementation2 from "./Implementation2";
import Implementation3 from "./Implementation3";
import MoreAboutUs from "./MoreAboutUs.jsx";
import Map from "../contact/Map";

const FrontPage = () => {
  return (
    <div className="frontpage">
      <TopColumns />
      <BigChair />
      <ThreeColumns />
      <Implementation1 />
      <Implementation2 />
      <Implementation3 />
      <MoreAboutUs />
      <div className="wrapper">
        <Map />
      </div>
    </div>
  );
};

export default FrontPage;
