import React from "react";

import img41 from "../../../assets/thumbnails/41.jpg";
import img42 from "../../../assets/thumbnails/42.jpg";
import img43 from "../../../assets/thumbnails/43.jpg";

import img44 from "../../../assets/thumbnails/44.jpg";
import img45 from "../../../assets/thumbnails/45.jpg";
import img46 from "../../../assets/thumbnails/46.jpg";

import img47 from "../../../assets/thumbnails/47.jpg";
import img48 from "../../../assets/thumbnails/48.jpg";
import img49 from "../../../assets/thumbnails/49.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Silent Room",
    producer: "Narbutas",
    category: "Akustyka",
    subcategory: "Budki telefoniczne",
    decsription:
      "SILENT ROOM to oaza ciszy w środku nowoczesnego biura. Dzięki temu rozwiązaniu koncentracja w miejscu pracy będzie dużo łatwiejsza, ponieważ umożliwia skupienie się podczas rozmów telefonicznych, wideokonferencjach i innych zadań twórczych wymagających skupienia. ",
    images: [img41, img42, img43],
  },
  {
    id: 2,
    name: "Vincent Van Duysen",
    producer: "Knoll",
    category: "Krzesła",
    subcategory: "Krzesła Gabinetowe",
    decsription:
      "SILENT ROOM to oaza ciszy w środku nowoczesnego biura. Dzięki temu rozwiązaniu koncentracja w miejscu pracy będzie dużo łatwiejsza, ponieważ umożliwia skupienie się podczas rozmów telefonicznych, wideokonferencjach i innych zadań twórczych wymagających skupienia. ",
    images: [img44, img45, img46],
  },
  {
    id: 3,
    name: "Multigeneration",
    producer: "Knoll",
    category: "Krzesła",
    subcategory: "Krzesła Obrotowe",
    decsription:
      "SILENT ROOM to oaza ciszy w środku nowoczesnego biura. Dzięki temu rozwiązaniu koncentracja w miejscu pracy będzie dużo łatwiejsza, ponieważ umożliwia skupienie się podczas rozmów telefonicznych, wideokonferencjach i innych zadań twórczych wymagających skupienia. ",
    images: [img47, img48, img49],
  },
];

const BudkiTelefoniczne = () => {
  return (
    <div className="wrapper">
      <div className="divider"></div>
      <div className="title">
        <h3>Produkty </h3> <h3 className="seperate">></h3>
        <h3 className="grey">Akustyka</h3>
        <h3 className="seperate">></h3>
        <h3 className="grey">Budki telefoniczne</h3>
      </div>

      {products.map((product) => {
        return (
          <Link
            to={`/products-acoustic/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card" data-aos="fade-up">
              <img className="productImg" src={product.images[2]} alt="" />
              <div className="produktImg darker">Zobacz więcej</div>
              <div className="subtitle">{product.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BudkiTelefoniczne;
