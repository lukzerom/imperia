import React from "react";
import "../../css/products.css";

import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <div className="divider"></div>

      <div className="wrapper">
        <h3>Produkty</h3>

        <Link
          to="/products-acoustic"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 26 produktów</div>
            <div className="subtitle">Akustyka</div>
          </div>
        </Link>
        <Link
          to="/acustic"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" data-aos="fade-up">
            <div className="img"> Rysunek Klaudii</div>
            <div className="img hidden"> 13 produktów</div>
            <div className="subtitle">Biurka i Stoły</div>
          </div>
        </Link>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 6 produktów</div>
          <div className="subtitle">Fotele i sofy</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Kontenery</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Krzesła</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Lady recepcyjne</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 126 produktów</div>
          <div className="subtitle">Oświetlenie</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Regały modułowe</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Szafy i kontenery</div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="img"> Rysunek Klaudii</div>
          <div className="img hidden"> 10 produktów</div>
          <div className="subtitle">Wykładziny</div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
