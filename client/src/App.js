import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import User from "./components/User";
import Home from "./components/Home";
import ShowCollection from "./components/ShowCollection";

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
      }
    }
  }
  _handleLogin = (email, password) => {
    return axios.post(`/api/user/login`, {email, password})
      .then((res) => {
        console.log(res)
        const newState = {...this.state}
        newState.user.id = res.data._id;
        newState.user.firstName = res.data.firstName;
        newState.user.lastName = res.data.lastName;
        newState.user.password = res.data.password;
        newState.user.collections = res.data.collections
        this.setState(newState)
        return true;
      })
  }
  _handleAddRecord = () => {

  }
  render() {
    console.log(this.state.user)
    const HomeComponent = () => (
      <Home handleLogin={this._handleLogin} userId={this.state.user.id}/>
    )
    const ShowCollectionComponent = () => (
      <ShowCollection handleAddRecord={this._handleAddRecord} />
    )
    return (
      <Router>
        <div>
          <h1>Vinyl Tracker</h1>
          <div>
            <Link to={`/user/${this.state.user.id}`}>Home</Link>
          </div>
          <div>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/user/:userId/:collectionId" render={ShowCollectionComponent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
