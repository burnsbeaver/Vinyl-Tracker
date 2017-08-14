import React, { Component } from 'react';
import axios from 'axios';

class ApiResults extends Component {
  constructor() {
    super();
    this.state = {
      newRecord: {
        name: '',
        artist: '',
        year: '',
        image: ''
      },
    }
  }
  _handleApiAdd = () => {
    console.log('Hit album ' + this.props.record.id)
    const newState = {...this.state}
    newState.newRecord.image = this.props.record.thumb
    axios.get(`https://api.discogs.com/releases/${this.props.record.id}`)
      .then((res) => {
        console.log(res.data);
        newState.newRecord.year = res.data.year
        newState.newRecord.name = res.data.title
        newState.newRecord.artist = res.data.artists[0].name
        this.setState(newState)
        this.props.handleAddRecord(this.state.newRecord, this.props.collectionId)
      })
  }
  render () {
    return(
      <span>
        <div>
          <img src={this.props.record.thumb} alt=""/>
        </div>
        <button onClick={this._handleApiAdd}>Add to {this.props.collection.name}</button>
      </span>
    )
  }
}

export default ApiResults;
