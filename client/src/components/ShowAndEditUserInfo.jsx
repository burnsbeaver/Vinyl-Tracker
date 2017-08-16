import React, { Component } from 'react'

class ShowAndEditUserInfo extends Component {
  constructor() {
    super()
    this.state = {
      newUserInfo: {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      },
      editUser: false
    }
  }
  componentWillMount = () => {
    const newState = {...this.state}
    newState.newUserInfo.email = this.props.user.email
    newState.newUserInfo.firstName = this.props.user.firstName
    newState.newUserInfo.lastName = this.props.user.lastName
    newState.newUserInfo.password = this.props.user.password
    this.setState(newState)
  }
  _toggleEdit = () => {
    const newState = {...this.state}
    newState.editUser = !newState.editUser
    this.setState(newState)
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newUserInfo = { ...this.state.newUserInfo };
         newUserInfo[attributeName] = attributeValue;

         this.setState({ newUserInfo })
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser(this.state.newUserInfo)
        const newState = {...this.state}
        newState.editUser = false
        this.setState(newState)
  }
  render () {
    if (!this.state.editUser){
      return(
        <div>
          <h4>Email: {this.props.user.email}</h4>
          <h4>First Name: {this.props.user.firstName}</h4>
          <h4>Last Name: {this.props.user.lastName}</h4>
          <button onClick={this._toggleEdit}>Edit</button>
        </div>
      )
    } else {
      return(
        <div>
            <form onSubmit={this._handleSubmit}>
              <input type="email" onChange={this._handleChange} value={this.state.newUserInfo.email} name="email" required/>
              <br/>
              <input type="text" onChange={this._handleChange} value={this.state.newUserInfo.firstName} name="firstName" required/>
              <br/>
              <input type="text" onChange={this._handleChange} value={this.state.newUserInfo.lastName} name="lastName" required/>
              <br/>
              <input type="password" onChange={this._handleChange} value={this.state.newUserInfo.password} name="password" required/>
              <br/>
              <input className="button" type="submit" value="Update Account" />
          </form>
          <button onClick={this._toggleEdit}>Cancel Update</button>
        </div>
      )
    }
  }
}

export default ShowAndEditUserInfo;
