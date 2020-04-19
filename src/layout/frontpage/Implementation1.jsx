import React from "react";
import "../../css/frontpage/implementation1.css";
import img29 from "../../assets/thumbnails/29.jpg";
import img31 from "../../assets/thumbnails/31.jpg";
import img32 from "../../assets/thumbnails/32.jpg";

const Implementation1 = () => {
  return (
    <div className="wrapper-mobile">
      <div className="implementation1">
        <div className="div1 darkblue">
          <h1 className="sideTextBig">Realizacje</h1>
        </div>
        <div className="div2" data-aos="fade-up">
          <h1>Kupper Glass</h1>
        </div>
        <div className="div3" data-aos="fade-up">
          <p>
            KUPPER GLASS, zajmujący się produkcja szkła oraz konstrukcji
            szklanych wynajął IMPERIA do projektu i wyposażenia swojego biura.
            Pomogliśmy stworzyć piękne i wszechstronne miejsce do pracy.
            Zaproponowaliśmy jasne, stonowane kolory i dużo przeszkleń
            akcentując to wszystko granatem i drewnem. Na wejściu
            zaprojektowaliśmy minimalistyczną ladę wykończoną drewnem i czarnym
            blatem
          </p>
        </div>
        <div className="div4">
          <h4 className="sideText">Kupper Glass</h4>
          <img className="img" data-aos="fade-left" src={img29} alt="" />
        </div>
        <div className="div5">
          <h4 className="sideText">Kupper Glass</h4>
          <img className="img" data-aos="fade-right" src={img31} alt="" />
        </div>
        <div className="div6 darkblue"></div>
        <div className="div7">
          <h4 className="sideText">Kupper Glass</h4>
          <img className="img" data-aos="fade-left" src={img32} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Implementation1;
