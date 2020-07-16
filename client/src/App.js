//DEPENDENCIES
//  React
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

  // App
function App () {
    return (
      <>
      <Nav />
      <div className="page"></div>
      <Footer />
      </>
    );
}

export default App;
