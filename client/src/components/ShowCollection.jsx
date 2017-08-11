import React, { Component } from 'react'
import axios from 'axios'
import Record from './Record'

class ShowCollection extends Component {
  constructor(){
    super();
    this.state = {
      collection: {
        id: '',
        name: '',
        numberOfRecords: '',
        records: []
      }
    }
  }
  componentWillMount(){
    const id = this.props.match.params.collectionId
    axios.get(`/api/user/:userId/${id}`)
      .then((res) => {
        const newState = {...this.state}
        newState.collection.id = res.data._id;
        newState.collection.name = res.data.name;
        newState.collection.numberOfRecords = res.data.numberOfRecords;
        newState.collection.records = res.data.records;
        this.setState(newState)
        console.log(this.state.collection.records)
      })
  }
  render () {
    const recordState = this.state.collection.records;
    const recordcomponent = recordState.map((record, i) => {
      return <Record key={i} record={record}/>
    })
    return(
      <div>
        <h2>{this.state.collection.name}</h2>
        <h4>{this.state.collection.numberOfRecords} Records</h4>
        <ul>
          {recordcomponent}
        </ul>
      </div>
    )
  }
}

export default ShowCollection;
