import React, { Component } from 'react';
import axios from 'axios';
import AddRecord from './AddRecord';
import Record from './Record';

class ShowCollection extends Component {
  constructor(){
    super();
    this.state = {
      collection: {
        id: '',
        name: '',
        numberOfRecords: '',
        records: []
      },
      newRecord: false
    }
  }
  componentWillMount(){
    const id = this.props.collectionId
    axios.get(`/api/user/:userId/collection/${id}`)
      .then((res) => {
        const newState = {...this.state}
        newState.collection.id = res.data._id;
        newState.collection.name = res.data.name;
        newState.collection.numberOfRecords = res.data.numberOfRecords;
        newState.collection.records = res.data.records;
        this.setState(newState)
      })
  }
  _handleAddNewRecord = () => {
    const newState = {...this.state}
    newState.newRecord = true
    this.setState(newState)
  }
  _handleDeleteRecord = (recordId) => {
    const id = recordId;
    axios.delete(`/api/user/:userId/collection/${this.state.collection.id}/record/${id}`)
      .then(() => {console.log('hit delete route for ' + recordId)})
  }
  render () {
    const collectionId = this.props.collectionId
    const recordState = this.state.collection.records;
    const recordcomponent = recordState.map((record, i) => {
      return <Record key={i} deleteRecord={this._handleDeleteRecord} collectionId={collectionId} record={record}/>
    })

    if (this.state.newRecord) {
      return (
        <AddRecord handleAddRecord={this.props.handleAddRecord} collectionId={collectionId}/>
      )
    } else {
      return (
        <div>
          <h2>{this.state.collection.name}</h2>
          <h4>{this.state.collection.numberOfRecords} Records</h4>
          <button onClick={this._handleAddNewRecord}>Add New Record</button>
          <ul>
            {recordcomponent}
          </ul>
        </div>
      )
    }
  }
}

export default ShowCollection;
