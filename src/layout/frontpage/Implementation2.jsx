import React from "react";
import "../../css/frontpage/implementation2.css";
import img11 from "../../assets/thumbnails/11.jpg";
import img19 from "../../assets/thumbnails/19.jpg";
import img15 from "../../assets/thumbnails/15.jpg";

const Implementation2 = () => {
  return (
    <div className="implementation2">
      <div className="div1" data-aos="fade-up">
        <h1>Ecologiq</h1>
      </div>
      <div className="div2">
        <img className="img" data-aos="fade-right" src={img11} alt="" />
      </div>
      <div className="div3" data-aos="fade-up">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maxime
          magnam dolore, quod tempore ut in odit quasi qui obcaecati sunt ipsam
          nam sapiente dolor accusantium nostrum earum dolores repudiandae vitae
          iusto id harum animi et explicabo. Ad pariatur non tempore debitis
          alias dolor porro ut in. Quaerat quam accusamus voluptatibus, nobis
          alias odio possimus molestias dolor ab ess
        </p>
      </div>
      <div className="div4">
        <h4 className="sideText">Ecologiq</h4>
        <img className="img" data-aos="fade-left" src={img19} alt="" />
      </div>
      <div className="div5">
        <img className="img" data-aos="fade-right" src={img15} alt="" />
      </div>
    </div>
  );
};

export default Implementation2;
