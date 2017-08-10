import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Vinyl Tracker</h1>
          <div>
            <Link to="/user/:userId">Home</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/user/:userId" component={User} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
