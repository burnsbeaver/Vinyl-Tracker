import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Collection extends Component {

  _handleOnClick = () => {
    this.props.handleViewCollection(this.props.collection._id)
  }
  render () {
    return(
      <div>
        <li>{this.props.collection.name} ({this.props.collection.records.length} Records)</li>

        <button onClick={this._handleOnClick}>View Collection</button>
      </div>
    )
  }
}

export default Collection;
