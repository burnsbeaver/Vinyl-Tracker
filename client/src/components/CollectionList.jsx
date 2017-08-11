import React, { Component } from 'react'
import Collection from './Collection'

class CollectionList extends Component {
  render () {
    const collectioncomponent = this.props.collections.map((collection, i) => {
      return <Collection key={i} collection={collection}/>
    })
    return(
      <div>
        <h3>You have {this.props.collections.length} Collections</h3>
        {collectioncomponent}
      </div>
    )
  }
}

export default CollectionList;
