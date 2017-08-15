import React, { Component } from 'react'

class RemoveCollection extends Component {
  _deleteCollection = () => {
    this.props.deleteCollection(this.props.collection._id)
  }
  render () {
    return(
      <div>
        <li>{this.props.collection.name} ({this.props.collection.records.length} Records)</li>
        <button onClick={this._deleteCollection}>**REMOVE COLLECTION**</button>
      </div>
    )
  }
}

export default RemoveCollection;
