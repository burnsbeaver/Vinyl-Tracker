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
        records: []
      },
      search: "",
      searchByArtist: "",
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
        newState.collection.records = res.data.records;
        this.setState(newState)
      })
  }
  _handleAddNewRecord = () => {
    const newState = {...this.state}
    newState.newRecord = true
    this.setState(newState)
  }
  _handleChange = (e) => {
    const attributeValue = e.target.value
    const attributeName = e.target.name
    const newState = {...this.state}
    newState[attributeName] = attributeValue
    this.setState(newState)
  }

  _handleDeleteRecord = (recordId) => {
    const id = recordId;
    axios.delete(`/api/user/${this.props.user.id}/collection/${this.state.collection.id}/record/${id}`)
      .then((res) => {console.log('hit delete route for ' + recordId)
        console.log(res)
        const newState = {...this.state}
        newState.collection.id = res.data._id;
        newState.collection.name = res.data.name;
        newState.collection.records = res.data.records;
        this.setState(newState)
        // this.props.updateState()
      })
  }
  render () {
    const collectionId = this.props.collectionId
    const recordState = this.state.collection.records;
    const recordcomponent = recordState.map((record, i) => {
      return record
    })
    const searched = recordcomponent.map((result, i) => {
      if (result.artist.toLowerCase().indexOf(this.state.search) !== -1 || result.name.toLowerCase().indexOf(this.state.search) !== -1) {
        return <Record key={i} deleteRecord={this._handleDeleteRecord} collectionId={collectionId} record={result}/>
      }
    })

    if (this.state.newRecord) {
      return (
        <AddRecord handleAddRecord={this.props.handleAddRecord} collection={this.state.collection} collectionId={collectionId}/>
      )
    } else {
      return (
        <div>
          <h2>{this.state.collection.name}</h2>
          <h4>{this.state.collection.records.length} Records</h4>
          <button onClick={this._handleAddNewRecord}>Add New Record</button>
          <form>
              <input type="text" name="search" placeholder="Search by Name, Artist, or Year!" onChange={this._handleChange} />
          </form>
          <ul>
            {searched}
          </ul>
        </div>
      )
    }
  }
}

export default ShowCollection;
