import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import ShowCollection from "./components/ShowCollection";
import AddRecord from "./components/AddRecord";

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
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/user/:userId/:collectionId" component={ShowCollection} />
            <Route exact path="/user/:userId/:collectionId/record/new" component={AddRecord} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
