import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import axios from 'axios'
import User from "./components/User";
import Home from "./components/Home";
import ShowCollection from "./components/ShowCollection";
import AddRecord from "./components/AddRecord";

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        collections: []
      },
      redirect: false
    }
  }
  _handleLogin = (email, password) => {
    console.log('Successful attempt for ' + email + password)
    axios.post(`/api/user/login`, {email, password})
      .then((res) => {
        const newState = {...this.state}
        newState.user.id = res.data._id;
        newState.user.firstName = res.data.firstName;
        newState.user.lastName = res.data.lastName;
        newState.user.password = res.data.password;
        newState.user.collections = res.data.collections
        newState.redirect = true
        this.setState(newState)
        console.log(this.state)
      })
  }
  render() {
    const HomeComponent = () => (
      <Home handleLogin={this._handleLogin} />
    )
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.state.user.id}`} />;
    } else {
    return (
      <Router>
        <div>
          <h1>Vinyl Tracker</h1>
          <div>
            <Link to="/user/:userId">Home</Link>
          </div>
          <div>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/user/:userId/:collectionId" component={ShowCollection} />
            <Route exact path="/user/:userId/:collectionId/record/new" component={AddRecord} />
          </div>
        </div>
      </Router>
    );
  }
}
}

export default App;
