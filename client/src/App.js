import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/User"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>LANDING PAGE</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/user/:userId">Login</Link>
          </div>
          <div>
            <Route path="/user/:userId" component={User} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
