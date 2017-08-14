import React, { Component } from 'react'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      newUserInfo: {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      }
    }
  }
  _handleCreateUser = (e) => {
    e.preventDefault()

    this.props.createUser(this.state.newUserInfo)
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newUserInfo = { ...this.state.newUserInfo };
         newUserInfo[attributeName] = attributeValue;

         this.setState({ newUserInfo })
}
  render () {
    return(
      <div>
        <h3>Or, create an account</h3>
        <form onSubmit={this._handleCreateUser}>
          <input type="email" placeholder="email" onChange={this._handleChange} value={this.state.newUserInfo.email} name="email" required/>
          <br/>
          <input type="text" placeholder="First Name" onChange={this._handleChange} value={this.state.newUserInfo.fistName} name="firstName" required/>
          <br/>
          <input type="text" placeholder="Last Name" onChange={this._handleChange} value={this.state.newUserInfo.lastName} name="lastName" required/>
          <br/>
          <input type="password" placeholder="password" onChange={this._handleChange} value={this.state.newUserInfo.password} name="password" required/>
          <br/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default CreateUser;
