import React, { Component} from 'react'

class Collection extends Component {
  render () {
    return(
      <li>{this.props.collection.name} ({this.props.collection.records.length} Records)</li>
    )
  }
}

export default Collection;
