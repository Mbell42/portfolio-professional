//DEPENDENCIES
//  React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//  Pages
import Home from "./pages/Home";

//  Components
import Nav from "./components/Nav";

import "./App.css";

// App
function App () {
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />

            </Switch>
          </div>
        </Router>
    );
}

export default App;
