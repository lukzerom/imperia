import React from "react";
import { Link } from "react-router-dom";

const Acoustic = () => {
  return (
    <>
      <div className="divider"></div>

      <div className="wrapper">
        <div className="title">
          <h3>Produkty </h3> <h3 className="seperate">></h3>{" "}
          <h3 className="grey">Akustyka</h3>
        </div>

        <Link
          to="/budki-telefoniczne"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 26 produktów</div>
            <div className="subtitle">Budki telefoniczne</div>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Panele wiszące</div>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Panele stojące</div>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Panele ścienne</div>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Przegrody międzybiurkowe</div>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Sofy akustyczne</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Acoustic;
