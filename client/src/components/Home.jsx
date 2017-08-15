import React, { Component } from 'react';
import { HomePageForms } from '../styles/Main'
import { Redirect } from 'react-router-dom';
import CreateUser from './CreateUser'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      loginInfo: {
        email: "",
        password: ""
      },
      redirect: false
    }
  }
  _createUserMiddleMan = (newUser) => {
    this.props.createUser(newUser)
        .then((redirect) => {
          const newState = {...this.state}
          newState.redirect = redirect
          this.setState(newState)
        })
  }
  _loginSubmit = (e) => {
    e.preventDefault()

    this.props.handleLogin(this.state.loginInfo.email, this.state.loginInfo.password)
        .then((redirect) => {
          const newState = {...this.state}
          newState.redirect = redirect
          this.setState(newState)
        })
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const loginInfo = { ...this.state.loginInfo };
         loginInfo[attributeName] = attributeValue;

         this.setState({ loginInfo })
}
  render () {
    console.log(this.props.invalidLogin)
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.props.userId}`} />;
    } else {
    return(
      <div>
        <p><strong>Welcome to Vinyl Tracker, an app for keeping track of your Vinyl collections. With this application, you have the ability to track records you own, customize collections, and create a wishlist of albums you want.</strong></p>
        <HomePageForms>
          <div>
            <h3>Login</h3>
            <div>{this.props.loginError}</div>
            <form onSubmit={this._loginSubmit}>
              <input type="email" value={this.state.loginInfo.email} name="email"
                placeholder="email" onChange={this._handleChange} required/>
              <br/>
              <input type="password" value={this.state.loginInfo.password} name="password"
                placeholder="password" onChange={this._handleChange} required/>
              <br/>
              <input type="submit" value="Login" />
            </form>
          </div>
          <CreateUser createUser={this._createUserMiddleMan} />
        </HomePageForms>
      </div>
    )
  }
}
}

export default Home;
