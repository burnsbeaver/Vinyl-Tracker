import React, { Component } from 'react'
import RemoveCollection from './RemoveCollection'
import ShowAndEditUserInfo from './ShowAndEditUserInfo'

class UpdateUser extends Component {
  constructor() {
    super();
    this.state = {
      password: ""
    }
  }
  _handleChange = (e) => {
    const attributeValue = e.target.value
    this.setState({password: attributeValue})
  }
  // _handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.updateUser(this.state.password)
  //   this.setState({password: })
  // }
  render () {
    const collectionscomponent =  this.props.user.collections.map((collection, i) => {
      return <RemoveCollection key={i} password={this.state.password} collection={collection} deleteCollection={this.props.deleteCollection}/>
    })
    return (
      <div>
        <h3>Update Account information, or delete collections</h3>
        <ShowAndEditUserInfo updateUser={this.props.updateUser} user={this.props.user}/>
        <h3>Delete Collection</h3>
        <p>Please note: Once a collection is deleted, it cannot be restored. <br/> Enter Password to Delete a Collection</p>
        <input type="password" placeholder="Password" onChange={this._handleChange}/>

        {collectionscomponent}

        <button onClick={this.props.toggleUpdateUser}>Back</button>
      </div>
    )
  }
}

export default UpdateUser;
