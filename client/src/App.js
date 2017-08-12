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
        id: '0',
        email: '0',
        firstName: '0',
        lastName: '0',
        password: '0',
        collections: [0, 0, 0]
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
  _handleAddRecord = (newRecord, collectionId) => {
    const id = collectionId;
    console.log(id + this.state.user.id)
    console.log('sending post request')
    axios.post(`/api/user/${this.state.user.id}/collection/${id}`, newRecord)
      .then((res) => {
        console.log(res)
      })
  }
  render() {
    console.log(this._handleAddRecord)
    const HomeComponent = () => (
      <Home handleLogin={this._handleLogin} userId={this.state.user.id}/>
    )

    const UserComponent = () => (
      <User userId={this.state.user.id} handleAddRecord={this._handleAddRecord}/>
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
            <Route exact path="/user/:userId" render={UserComponent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
