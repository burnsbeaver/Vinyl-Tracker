import React, { Component } from 'react'
import Collection from './Collection'

class CollectionList extends Component {
  render () {
    const collectionState = this.props.user.collections
    const collectioncomponent = collectionState.map((collection, i) => {
      return <Collection key={i} user={this.props.user} handleViewCollection={this.props.handleViewCollection} collection={collection}/>
    })
    return(
      <div>
        <h3>You have {collectionState.length} Collections</h3>
        <ul>
          {collectioncomponent}
        </ul>
      </div>
    )
  }
}

export default CollectionList;
