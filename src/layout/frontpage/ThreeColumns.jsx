import React from "react";
import "../../css/frontpage/ThreeColumns.css";

const ThreeColumns = () => {
  return (
    <>
      <div className="wrapper-mobile">
        <div class="threeColumns">
          <div class="div1 h1-container " data-aos="fade-up">
            <h2>Wyobraźnia</h2>
          </div>

          <div class="div4" data-aos="fade-up">
            <p>
              Tworzymy spersonalizowane przestrzenie biurowe zgodne z
              wartościami marki
            </p>
          </div>
          <div class="div2 h1-container" data-aos="fade-up">
            <h2>Współpraca</h2>
          </div>
          <div class="div5" data-aos="fade-up">
            <p>
              Współpracujemy z wieloma producentami mebli oferującymi najwyższej
              klasy rozwiązania.
            </p>
          </div>
          <div class="div3 h1-container" data-aos="fade-up">
            <h2>Innowacja</h2>
          </div>
          <div class="div6" data-aos="fade-up">
            <p>
              Przestrzenie biurowe projektujemy zgodnie z najnowszymi trendami i
              potrzebami pracowników.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumns;
