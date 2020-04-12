import React from "react";
import "./css/App.css";
import AOS from "../node_modules/aos";
import Nav from "./navigation/Nav.jsx";
import Frontpage from "./layout/frontpage/FrontPage";
import Implementations from "./layout/implementations/Implementations";
import Products from "./layout/products/Products";
import Services from "./layout/services/Services";
import About from "./layout/about/About";
import Contact from "./layout/contact/Contact";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

AOS.init();

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/implementations" component={Implementations} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Frontpage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
