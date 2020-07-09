//DEPENDENCIES
//  React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//  Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryCode from "./pages/GalleryCode";
import GalleryVFX from "./pages/GalleryVFX";

//  Components
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

// App
function App () {
    return (
        <Jumbotron>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/gallery_code" component={GalleryCode} />
                <Route path="/gallery_vfx" component={GalleryVFX} />
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </Jumbotron>
        
        <Footer></Footer>
    );
}

export default App;
