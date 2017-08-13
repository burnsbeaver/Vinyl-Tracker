import React, { Component } from 'react'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      newUserInfo: {
        email: "",
        fisrtName: "",
        lastName: "",
        password: ""
      },
      redirect: false
    }
  }
  _handleCreateUser = (e) => {
    e.preventDefault()

    console.log('testing')
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const loginInfo = { ...this.state.loginInfo };
         loginInfo[attributeName] = attributeValue;

         this.setState({ loginInfo })
}
  render () {
    return(
      <div>
        <h3>Or, create an account</h3>
        <form onSubmit={this._handleCreateUser}>
          <input type="email" placeholder="email" name="email"/>
          <br/>
          <input type="text" placeholder="Last Name" name="lastName"/>
          <br/>
          <input type="text" placeholder="First Name" name="firstName"/>
          <br/>
          <input type="password" placeholder="password" name="password"/>
          <br/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default CreateUser;
