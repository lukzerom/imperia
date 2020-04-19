import React from "react";
import img21 from "../../assets/thumbnails/21.jpg";
import "../../css/frontpage/BigChair.css";

const BigChair = () => {
  return (
    <div className="wrapper-mobile">
      <div className="chair">
        <div className="div1">
          <img src={img21} alt="" />
        </div>
        <div className="div2" data-aos="fade-up">
          <h1 className="white">Najlepsza jakość</h1>
        </div>
        <div className="div3" data-aos="fade-up">
          <p className="white">
            Wysokiej jakości wyposażenie przyczynia się do stworzenia dobrego
            środowiska pracy. We wszystkich przestrzeniach biurowych, nad
            którymi pracujemy, chcemy nie tylko wnieść naszą wiedzę fachową, ale
            stworzyć również ludzkie środowisko, z którego przyjemnie się
            korzysta. Kluczowe dla rozwoju organizacji jest twórcze myślenie,
            które można skutecznie stymulować, dostosowując architekturę wnętrz
            biura do potrzeb pracowników i charakteru firmy. Zatem szczególne
            znaczenie dla efektywności pracy opartej na wiedzy ma właściwa
            aranżacja przestrzeni biurowej, uwzględniająca potrzeby pracowników.
            Odpowiedni podział dostępnej powierzchni na przenikające się
            wzajemne strefy, które sprzyjają: koncentracji, komunikacji i
            interakcjom, wpływa pozytywnie na potencjał kreatywny personelu.
            Szczęśliwi pracownicy angażują się w swoją pracę z większą energią i
            entuzjazmem oraz przyczyniają się do dobrej atmosfery. W IMPERIA
            nigdy nie zapominamy, że praca wykonana z przyjemnością wzmacnia
            radość z życia. Z Tobą i dla Ciebie, wprowadzimy dobre samopoczucie
            w pracy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigChair;
