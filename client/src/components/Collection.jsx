import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Collection extends Component {
  render () {
    console.log(this.props.collection)
    console.log(this.props.collectionState)
    return(
      <div>
        <li>{this.props.collection.name} ({this.props.collection.records.length} Records)</li>
        <span>{this.props.collection._id}</span>
        <Link to={`/user/${this.props.user.id}/${this.props.collection._id}`}>View Collection</Link>
      </div>
    )
  }
}

export default Collection;
