import React from "react";
import "../../css/frontpage/TopColumns.css";
import img16 from "../../assets/thumbnails/16.jpg";
import office from "../../assets/thumbnails/office.png";
import table from "../../assets/thumbnails/table.png";
import chair from "../../assets/thumbnails/chair.png";

const TopColumns = () => {
  return (
    <div className="wrapper-mobile">
      <div className="parent">
        <div className="div1">
          <img src={img16} data-aos="fade-left" alt="" />
        </div>
        <div className="div2  h1-container" data-aos="fade-up">
          <h1>Projektowanie wnętrz</h1>
        </div>
        <div className="div3 two-columns-large" data-aos="fade-up">
          <p>
            Tworzymy przestrzenie, które łączą się z użytkownikiem pod względem
            estetycznym i funkcjonalnym. Oferujemy usługę projektowania wnętrz
            przestrzeni biurowych, która zapewnia kompleksowe rozwiązania, takie
            jak identyfikacje wizualną marki, bezpieczeństwo i dobre
            samopoczucie pracowników. firmy
          </p>
          <p>
            Na każdym etapie współpracujemy z naszymi klientami, oferując
            wysokiej jakości doradztwo w celu tworzenia innowacyjnych
            przestrzeni dokładnie odzwierciedlających wartości marki i kulturę
          </p>
        </div>
        <div className="div8">
          <img src={office} alt="" className="img" data-aos="fade-up" />
        </div>
        <div className="div4" data-aos="fade-up"></div>
        <div className="div5  h1-container" data-aos="fade-up">
          <h1>Przyjazna przestrzeń</h1>
        </div>
        <div className="div6 two-columns-large" data-aos="fade-up">
          <p>
            Bazując na naszym doświadczeniu projektujemy funkcjonalne i
            ergonomiczne przestrzenie biurowe. Rozwiązania meblowe dostosowujemy
            z jak największymi możliwościami regulacyjnymi. Pozycja siedząca
            bardzo obciąża kręgosłup, dlatego dzięki odpowiedniemu dopasowaniu
            rozwiązań jesteśmy w stanie uzyskać najbardziej optymalne stanowisko
            pracy pod danego użytkownika.
          </p>
          <p>
            Nie zapominamy również o psychologicznym oddziaływaniu wnętrza na
            pracownika – design, kolory czy materiały, z jakich wykonane są
            meble wpływają na komfort pracy, dlatego łączymy ergonomię z ciekawą
            stylistyką.
          </p>
        </div>

        <div className="div9">
          <img src={chair} alt="" className="img" data-aos="fade-up" />
        </div>
        <div className="div10  h1-container" data-aos="fade-up">
          <h1>Biuro dynamiczne </h1>
        </div>
        <div className="div11" data-aos="fade-up">
          <p>
            Nasze doświadczenie i liczne partnerstwa pozwalają nam tworzyć
            gotowe do pracy przestrzenie biurowe, które odpowiadają dzisiejszym
            potrzebom naszych klientów, pozostając jednocześnie elastycznym w
            stosunku do zmieniającego się otoczenia celów biznesowych i stylów
            pracy.
          </p>
        </div>
        <div className="div12">
          <img src={table} alt="" className="img" data-aos="fade-up" />{" "}
        </div>
      </div>
    </div>
  );
};

export default TopColumns;
