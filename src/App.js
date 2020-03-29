import React from 'react';
import './css/App.css';
import AOS from '../node_modules/aos'
import Nav from './navigation/Nav.jsx';
import Frontpage from './layout/frontpage/FrontPage';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

AOS.init()

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Frontpage />
        </Router>
      </div>
    </>
  );
}

export default App;
