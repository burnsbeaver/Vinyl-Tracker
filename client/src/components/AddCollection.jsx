import React, { Component } from 'react'

class AddCollection extends Component {
  constructor() {
    super();
    this.state = {
      newCollection: {
        name: '',
        description: ''
      }
    }
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newCollection = { ...this.state.newCollection };
         newCollection[attributeName] = attributeValue;

         this.setState({ newCollection })
 };
 _handleSubmit = (e) => {
   e.preventDefault()
   this.props.newCollection(this.state.newCollection)
};


render () {
    return(
      <div>
        <h3>New Collection</h3>
        <form onSubmit={this._handleSubmit}>
          <input type="text"  onChange={this._handleChange}
              value={this.state.newCollection.name} name="name" placeholder="Collection Name" />
          <input type="text" onChange={this._handleChange}
              value={this.state.newCollection.description} name="description" placeholder="Description" />
            <input type="submit" value="AddCollection" />
        </form>
      </div>
    )
  }
}
export default AddCollection;
