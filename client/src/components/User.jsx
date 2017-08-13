import React, { Component } from 'react';
import axios from 'axios';
import CollectionList from './CollectionList';
import ShowCollection from './ShowCollection'
import AddCollection from './AddCollection'

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        password: '',
        collections: []
      },
      collection: {
        id: '',
      },
      viewCollection: false,
      newCollection: false,
    }
  }
  componentWillMount(){
      const id = this.props.userId
      axios.get(`/api/user/${id}`)
        .then((res) => {
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.firstName = res.data.firstName;
          newState.user.lastName = res.data.lastName;
          newState.user.password = res.data.password;
          newState.user.collections = res.data.collections
          this.setState(newState)
        })
  }

  _updateComponent(){
    const id = this.props.userId
    console.log('UPDATING')
    axios.get(`/api/user/${id}`)
      .then((res) => {
        const newState = {...this.state}
        newState.user.id = res.data._id;
        newState.user.firstName = res.data.firstName;
        newState.user.lastName = res.data.lastName;
        newState.user.password = res.data.password;
        newState.user.collections = res.data.collections
        this.setState(newState)
      })
  }

  _handleViewCollection = (collectionId) => {
    const newState = {...this.state}
    newState.viewCollection = true
    newState.collection.id = collectionId
    this.setState(newState)
  }
  _handleReturnToCollection = () => {
    const newState = {...this.state}
    newState.viewCollection = false
    this.setState(newState)
  }
  _toggleNewCollection = () => {
    const newState = {...this.state}
    newState.newCollection = !newState.newCollection
    this.setState(newState)
  }
  _handleNewCollection = (newCollection) => {
    const id = this.props.userId
    axios.post(`/api/user/${id}/collection/new`, newCollection)
      .then((res) => {console.log(res)})
      .then(this._updateComponent())
  }

  render () {
    let newCollectionWords = '';
    if(this.state.viewCollection) {
      return(
        <div>
          <button onClick={this._handleReturnToCollection}>Back to Collections</button>
          <ShowCollection handleAddRecord={this.props.handleAddRecord} user={this.state.user} collectionId={this.state.collection.id}/>
        </div>
        )
    } else{
      if (this.state.newCollection) {
        return(
          <div>
            <h3>Hello, {this.state.user.firstName}</h3>
            <CollectionList handleViewCollection={this._handleViewCollection} user={this.state.user}/>
            <button onClick={this._toggleNewCollection}>Close Form</button>
            <AddCollection newCollection={this._handleNewCollection}/>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Hello, {this.state.user.firstName}</h3>
            <CollectionList handleViewCollection={this._handleViewCollection} user={this.state.user}/>
            <button onClick={this._toggleNewCollection}>Add Collection</button>
          </div>
        )
      }

    }
  }
}

export default User;
