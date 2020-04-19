import React from "react";
import "../../css/frontpage/implementation3.css";
import img37 from "../../assets/thumbnails/37.jpeg";
import img38 from "../../assets/thumbnails/38.jpeg";
import img39 from "../../assets/thumbnails/39.jpeg";

const Implementation3 = () => {
  return (
    <>
      <div className="wrapper-mobile">
        <div className="implementation3">
          <div className="div1" data-aos="fade-up">
            <h1>Esotiq & Henderson</h1>
          </div>
          <div className="div2" data-aos="fade-up">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              expedita labore aliquam quidem commodi officiis suscipit. Illum
              possimus recusandae corrupti officiis corporis ad laborum eligendi
              fugit, accusamus, esse beatae reprehenderit, minus obcaecati
              cupiditate at placeat dicta. Illum velit ratione, fugiat eligendi
              quibusdam, maiores quis, quidem saepe aliquam consequuntur sit
              distinctio Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi quaerat inventore necessitatibus magni sint.
              Consectetur accusantium soluta odio possimus natus.
            </p>
          </div>
          <div className="div3">
            <h4 className="sideText">Esotiq & Henderson</h4>
            <img src={img38} alt="" data-aos="fade-right" className="img" />
          </div>
          <div className="div4">
            <h4 className="sideText">Esotiq & Henderson</h4>{" "}
            <img src={img39} alt="" data-aos="fade-left" className="img" />
          </div>
        </div>
        <img className="img esotiq_bottom" src={img37} alt="" />
      </div>
    </>
  );
};

export default Implementation3;
