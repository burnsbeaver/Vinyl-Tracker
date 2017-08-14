import React, { Component } from 'react';
import SearchForRecord from './SearchForRecord';

class AddRecord extends Component {
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
};


render () {
    return(
      <div>
        <h3>New Record</h3>
        <h5>Manually add a record in, or search for a match below!</h5>
        <form onSubmit={this._handleSubmit}>
          <input type="text"  onChange={this._handleChange}
              value={this.state.newRecord.name} name="name" placeholder="Record Name" required/>
          <input type="text" onChange={this._handleChange}
              value={this.state.newRecord.artist} name="artist" placeholder="Artist" required/>
          <input type="number" onChange={this._handleChange}
              value={this.state.newRecord.year} name="year" placeholder="Release Year" required/>
          <input type="text" onChange={this._handleChange}
                value={this.state.newRecord.image} name="image" placeholder="URL to Record Image" required/>
              <input type="submit" value="Add Record" />
        </form>
        <br />
        <SearchForRecord handleAddRecord={this.props.handleAddRecord} collectionId={this.props.collectionId} collection={this.props.collection} records={this.state.record}/>
      </div>
    )
  }
}

export default AddRecord;
