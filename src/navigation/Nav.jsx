import React from "react";
import "./Nav.css";
import logo from "../assets/logo1.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";

// $(document).ready(function () {
//   $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
//     $(this).toggleClass("open");
//   });
// });

const showResponsiveNav = () => {
  document.querySelector(".responsive").style.right = "20px";
  document.querySelector("#nav-icon1").classList.toggle("open");
};

const hideResponsiveNav = () => {
  document.querySelector(".responsive").style.right = "-220px";

  document.querySelector("#nav-icon1").classList.toggle("open");
};

const Nav = () => {
  const onClick = (e) => {
    if (document.getElementById("nav-icon1").classList.contains("open")) {
      hideResponsiveNav();
    } else {
      showResponsiveNav();
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo Imperia" className="logo" />
      </Link>

      <div id="nav-icon1" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul>
        <Link to="/">
          <li>
            <i className="fas fa-home"></i>
          </li>
        </Link>
        {/* <Link to="/products">
          <li>Produkty</li>
        </Link> */}
        <Link to="/implementations">
          <li>Realizacje</li>
        </Link>
        <Link to="/services">
          <li>Usługi</li>
        </Link>
        <Link to="/dla-architekta">
          <li>Dla architekta</li>
        </Link>
        <Link to="/about">
          <li>O nas </li>
        </Link>
        <Link to="/contact">
          <li>Kontakt</li>
        </Link>
      </ul>

      <ul className="responsive">
        <Link to="/" onClick={hideResponsiveNav}>
          <li>
            <i className="fas fa-home"></i>
          </li>
        </Link>
        {/* <Link to="/products" onClick={hideResponsiveNav}>
          <li>Produkty</li>
        </Link> */}
        <Link to="/implementations" onClick={hideResponsiveNav}>
          <li>Realizacje</li>
        </Link>
        <Link to="/services" onClick={hideResponsiveNav}>
          <li>Usługi</li>
        </Link>
        <Link to="/dla-architekta" onClick={hideResponsiveNav}>
          <li>Dla architekta</li>
        </Link>
        <Link to="/about" onClick={hideResponsiveNav}>
          <li>O nas </li>
        </Link>
        <Link to="/contact" onClick={hideResponsiveNav}>
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
