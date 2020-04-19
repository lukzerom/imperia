import React from "react";
import Map from "./Map";
import MoreAbout from "../frontpage/MoreAboutUs";

const Contact = () => {
  return (
    <div>
      <MoreAbout />
      <div className="wrapper">
        <div className="wrapper-mobile">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
