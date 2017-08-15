import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import {HeaderStyles} from './styles/Main'
import { injectGlobal } from 'styled-components'
import User from "./components/User";
import Home from "./components/Home";

injectGlobal`
  body {
    background-image: url('http://www.efurnituremart.com/images/PO/Jaipur-Rugs-Red-and-Orange-Solid-Pattern-Shag-Rug---VR02.jpg');
    background-position: center;
    background-size: cover;
    color: white;
    font-weight: 800;
  }
`;

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
        collections: [0, 0, 0],
        invalidLogin: "Enter Credentials below",
        invalidCreateAccount: "Enter Credentials below"
      }
    }
  }

  _handleLogin = (email, password) => {
    return axios.post(`/api/user/login`, {email, password})
      .then((res) => {
        if(res.data.email){
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.email = res.data.email;
          newState.user.firstName = res.data.firstName;
          newState.user.lastName = res.data.lastName;
          newState.user.password = res.data.password;
          newState.user.collections = res.data.collections
          this.setState(newState)
          return true;
        } else {
          const newState = {...this.state}
          newState.user.invalidLogin = res.data
          this.setState(newState)
          return false
        }
      })
  }
  _handleCreateUser = (newUser) => {
    return axios.post(`/api/user/create`, newUser)
      .then((res) => {
        if(res.data.email){
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.email = res.data.email;
          newState.user.firstName = res.data.firstName;
          newState.user.lastName = res.data.lastName;
          newState.user.password = res.data.password;
          newState.user.collections = res.data.collections
          this.setState(newState)
          return true;
        } else{
          const newState = {...this.state}
          newState.user.invalidCreateAccount = res.data
          this.setState(newState)
          return false
        }
      })
  }
  _handleAddRecord = (newRecord, collectionId) => {
    const id = collectionId;
    return axios.post(`/api/user/${this.state.user.id}/collection/${id}`, newRecord)
      .then((res) => {
        const newState = {...this.state}
        newState.user.id = res.data._id;
        newState.user.email = res.data.email;
        newState.user.firstName = res.data.firstName;
        newState.user.lastName = res.data.lastName;
        newState.user.password = res.data.password;
        newState.user.collections = res.data.collections
        this.setState(newState)
        return false
      })
  }
  render() {
    const HomeComponent = () => (
      <Home loginError={this.state.invalidLogin} createUser={this._handleCreateUser} handleLogin={this._handleLogin} userId={this.state.user.id}/>
    )

    const UserComponent = () => (
      <User userId={this.state.user.id} collections={this.state.user.collections} handleAddRecord={this._handleAddRecord}/>
    )
    return (
      <Router>
        <div>
          <HeaderStyles>
            <img src="http://dlp2gfjvaz867.cloudfront.net/product_photos/94461/gold_original.jpg" alt="" />
            <h1>Vinyl Tracker</h1>
            <Link to={`/`}>Logout</Link>
          </HeaderStyles>
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
