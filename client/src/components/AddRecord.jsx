import React, { Component } from 'react';

class AddRecord extends Component {
  constructor() {
    super();
    this.state = {
      newRecord: {
        name: '',
        artist: '',
        year: ''
      },
      collection: {
        id: '',
        name: '',
        numberOfRecords: '',
        records: []
      }
    }
  }

  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newRecord = { ...this.state.newRecord };
         newRecord[attributeName] = attributeValue;

         this.setState({ newRecord })
 };
 _handleSubmit = (e) => {
   e.preventDefault()
   this.props.handleAddRecord(this.state.newRecord, this.props.collectionId)
 }
  render () {
    console.log(this.props.handleAddRecord)
    return(
      <div>
        <h3>New Record</h3>
        <form onSubmit={this._handleSubmit}>
          <input type="text"  onChange={this._handleChange}
              value={this.state.newRecord.name} name="name" placeholder="Record Name" />
          <input type="text" onChange={this._handleChange}
              value={this.state.newRecord.artist} name="artist" placeholder="Artist" />
          <input type="number" onChange={this._handleChange}
              value={this.state.newRecord.year} name="year" placeholder="Release Year" />
          <input type="submit" value="Add Record" />
        </form>
      </div>
    )
  }
}

export default AddRecord;
