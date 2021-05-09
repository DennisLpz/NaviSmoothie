import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SmoothieForm from "./components/SmoothieForm";
import ViewSmoothies from "./components/ViewSmoothies";

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  return (
    <div className="parentContainer">
      <Router>
        <div className="navBar">
          <li className="customLink title">Navi's Smoothies</li>
          <ul className="navBarLinks">
            <li className="list-inline-item">
              <Link className="customLink" to="/">
                View All
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="customLink" to="/SmoothieForm">
                Create New
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="slogan">Welcome to the New You</h1>

        <form className="search-form">
          <input
            className="search-bar"
            type="text"
            placeholder="Where's mah smoothie?"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="switchContainer">
          <Switch>
            <Route path="/viewSmoothies" component={ViewSmoothies} />
            <Route path="/SmoothieForm" component={SmoothieForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
