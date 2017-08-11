import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Collection extends Component {
  constructor(){
    super();
    this.state = {
      collection: {
        name: "",
        id: "",
        description: "",
        numberOfRecords: "",
        records: []
      }
    }
  }

  componentWillMount() {

  }
  render () {
    console.log(this.props.collection)
    return(
      <div>
        <li>{this.props.collection.name} ({this.props.collection.records.length} Records)</li>
        <span>{this.props.collection._id}</span>
        <Link to="/user/:userId/:collectionId">View Collection</Link>
      </div>
    )
  }
}

export default Collection;
