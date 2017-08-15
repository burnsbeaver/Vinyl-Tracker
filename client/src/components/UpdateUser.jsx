import React, { Component } from 'react'
import RemoveCollection from './RemoveCollection'

class UpdateUser extends Component {
  _handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser()
  }
  render () {
    const collectionscomponent =  this.props.user.collections.map((collection, i) => {
      return <RemoveCollection key={i} collection={collection} deleteCollection={this.props.deleteCollection}/>
    })
    return (
      <div>
        <h3>Update Account information, or delete collections</h3>
          <form onSubmit={this._handleSubmit}>
            <input className="button" type="submit" value="Update Account" />
          </form>
        <h3>Delete Collection</h3>
        <p>Please note: Once a collection is deleted, it cannot be restored.</p>

        {collectionscomponent}

        <button onClick={this.props.toggleUpdateUser}>Back</button>
      </div>
    )
  }
}

export default UpdateUser;
