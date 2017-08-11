import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.props.userId}`} />;
    } else {
    return(
      <div>
        <h3>Login</h3>
        <form onSubmit={this._loginSubmit}>
          <input type="email" value={this.state.loginInfo.email} name="email" placeholder="email" onChange={this._handleChange}/>
          <input type="password" value={this.state.loginInfo.password} name="password" placeholder="password" onChange={this._handleChange}/>
          <input type="submit" value="Login" />
        </form>
        <br/>
        <br/>
        <h3>Or, create an account</h3>
        <form>
          <input type="email" placeholder="email" />
          <br/>
          <input type="text" placeholder="Last Name" />
          <br/>
          <input type="text" placeholder="First Name" />
          <br/>
          <input type="password" placeholder="password" />
          <br/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}
}

export default Home;
