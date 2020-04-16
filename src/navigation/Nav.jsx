import React from "react";
import "./Nav.css";
import logo from "../assets/logo1.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function showResponsiveNav() {
  document.querySelector(".responsive").style.right = "20px";

  document.querySelector(".navClose").style.visibility = "visible";
  document.querySelector(".hamburger").style.display = "none";
}

function hideResponsiveNav() {
  document.querySelector(".navClose").style.visibility = "hidden";
  document.querySelector(".responsive").style.right = "-220px";

  document.querySelector(".hamburger").style.display = "inline-block";
}

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo Imperia" className="logo" />
      </Link>
      <a className="hamburger" onClick={showResponsiveNav}>
        &#9776;
      </a>
      <a className="navClose" onClick={hideResponsiveNav}>
        &#62;
      </a>
      <ul>
        <Link to="/">
          <li>
            <i className="fas fa-home"></i>
          </li>
        </Link>
        <Link to="/products">
          <li>Produkty</li>
        </Link>
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

      <ul className={"responsive"}>
        <Link to="/">
          <li onClick={hideResponsiveNav}>
            <i className="fas fa-home"></i>
          </li>
        </Link>
        <Link to="/Products">
          <li onClick={hideResponsiveNav}>Produkty</li>
        </Link>
        <Link to="/Implementations">
          <li onClick={hideResponsiveNav}>Realizacje</li>
        </Link>
        <Link to="/Services">
          <li onClick={hideResponsiveNav}>Usługi</li>
        </Link>
        <Link to="/About">
          <li onClick={hideResponsiveNav}>O nas </li>
        </Link>
        <Link to="/Contact">
          <li onClick={hideResponsiveNav}>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
