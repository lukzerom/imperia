import React from "react";
import architect from "../assets/thumbnails/architect.jpg";

const ForArchitect = () => {
  return (
    <div className="wrapper">
      <div className="two-columns-flex" data-aos="fade-up">
        <div className="half">
          <h1>Informacje dla architektów</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            natus. Rem ullam reiciendis quas voluptatem aliquid blanditiis a
            voluptatibus? Vel eos adipisci possimus impedit temporibus laborum
            molestias asperiores expedita eaque. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Optio enim, ea temporibus pariatur
            quibusdam voluptatum eum consequuntur placeat quod veritatis a
            impedit similique natus obcaecati vitae dolores neque voluptate
            aspernatur!
          </p>
        </div>
        <img src={architect} alt="" className="half" />
      </div>
    </div>
  );
};

export default ForArchitect;
