import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import {HeaderStyles, BodyStyles} from './styles/Main'
import { injectGlobal } from 'styled-components'
import User from "./components/User";
import Home from "./components/Home";

injectGlobal`
  body {
    background-image: url('http://wallpapersin4k.net/wp-content/uploads/2016/12/Vinyl-Wallpapers-6.jpg');
    background-position: center;
    background-size: cover;
    font-family: Comic Sans MS;
    color: white;
    font-weight: 800;
    a {
      color: #6AC1A2;
    }
  }
  button, input.button {
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 10px;
    text-shadow: 0px 2px 7px #1a071a;
    font-family: Arial;
    color: #ffffff;
    font-size: 10px;
    background: #6AC1A2;
    padding: 4px 8px 4px 8px;
    text-decoration: none;
    &:hover {
      background: #4ee0af;
    }
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
        collections: [0, 0, 0]
      },
      invalidLogin: "",
      invalidCreateAccount: ""
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
          newState.invalidLogin = res.data
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
          newState.invalidCreateAccount = res.data
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
      <Home loginError={this.state.invalidLogin} createAccountError={this.state.invalidCreateAccount} createUser={this._handleCreateUser} handleLogin={this._handleLogin} userId={this.state.user.id}/>
    )

    const UserComponent = () => (
      <User userId={this.state.user.id} collections={this.state.user.collections} handleAddRecord={this._handleAddRecord}/>
    )
    return (
      <Router>
        <div>
          <HeaderStyles>
            <img src="https://s-media-cache-ak0.pinimg.com/originals/02/e2/89/02e2899171aca0ab5d80e402749779fe.png" alt="" />
            <h1>Vinyl Tracker</h1>
            <Link to={`/`}>Logout</Link>
          </HeaderStyles>
          <BodyStyles>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/user/:userId" render={UserComponent} />
          </BodyStyles>
        </div>
      </Router>
    );
  }
}

export default App;
