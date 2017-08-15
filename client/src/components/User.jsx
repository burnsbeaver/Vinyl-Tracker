import React, { Component } from 'react';
import axios from 'axios';
import CollectionList from './CollectionList';
import ShowCollection from './ShowCollection'
import AddCollection from './AddCollection'
import UpdateUser from './UpdateUser'

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        collections: []
      },
      collection: {
        id: '',
      },
      viewCollection: false,
      newCollection: false,
      updateUser: false
    }
  }
  componentWillMount(){
      const id = this.props.userId
      axios.get(`/api/user/${id}`)
        .then((res) => {
          console.log(res.data._id)
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.firstName = res.data.firstName;
          newState.user.lastName = res.data.lastName;
          newState.user.email = res.data.email
          newState.user.password = res.data.password;
          newState.user.collections = res.data.collections
          this.setState(newState)
        })
  }
  _addRecordMiddleMan = (Record, collectionId) => {
    this.props.handleAddRecord(Record, collectionId)
    .then((response) => {
      const newState = {...this.state}
      newState.user.collections = this.props.collections
      newState.viewCollection = response
      this.setState(newState)
    })
  }
  // _updateState = () => {
  //   const email = this.state.email
  //   const password = this.state.password
  //   axios.post(`/api/user/login`, {email, password})
  //   .then((res) => {
  //     const newState = {...this.state}
  //     newState.user.id = res.data._id;
  //     newState.user.email = res.data.email;
  //     newState.user.firstName = res.data.firstName;
  //     newState.user.lastName = res.data.lastName;
  //     newState.user.password = res.data.password;
  //     newState.user.collections = res.data.collections
  //     this.setState(newState)
  //   })
  // }
  _handleViewCollection = (collectionId) => {
    const newState = {...this.state}
    newState.viewCollection = true
    newState.collection.id = collectionId
    this.setState(newState)

  }
  _handleReturnToCollection = () => {
    const id = this.props.userId
    axios.get(`/api/user/${id}`)
      .then((res) => {
        const newState = {...this.state}
        newState.user.collections = res.data.collections
        newState.viewCollection = false
        this.setState(newState)
      })
  }
  _toggleNewCollection = () => {
    const newState = {...this.state}
    newState.newCollection = !newState.newCollection
    this.setState(newState)
  }
  _handleNewCollection = (newCollection) => {
    const id = this.props.userId
    axios.post(`/api/user/${id}/collection/new`, newCollection)
      .then((res) => {
        const newState = {...this.state}
        newState.user.collections = res.data.collections
        newState.newCollection = false;
        this.setState(newState)
      })
  }
  _toggleViewUpdateUser = () => {
    const newState = {...this.state}
    newState.updateUser = !newState.updateUser
    this.setState(newState)
  }
  _handleDeleteCollection = (password, collectionId) => {
    if (password === this.state.user.password) {
      axios.delete(`/api/user/${this.state.user.id}/collection/${collectionId}`)
        .then((res) => {
          const newState = {...this.state}
          newState.user.collections = res.data.collections
          this.setState(newState)
        })
    } else {
      alert ('Incorrect password')
    }
  }
  _handleUpdateUser = () => {
    console.log('update user works')
  }

  render () {
    if(this.state.viewCollection) {
      return(
        <div>
          <button onClick={this._handleReturnToCollection}>Back to Collections</button>
          <ShowCollection handleAddRecord={this._addRecordMiddleMan} user={this.state.user} collectionId={this.state.collection.id}/>
        </div>
        )
    } else if (this.state.updateUser) {
      return (
        <UpdateUser user={this.state.user} deleteCollection={this._handleDeleteCollection} updateUser={this._handleUpdateUser} toggleUpdateUser={this._toggleViewUpdateUser}/>
      )
    } else{
      if (this.state.newCollection) {
        return(
          <div>
            <h3>Hello, {this.state.user.firstName}</h3>
            <button onClick={this._toggleViewUpdateUser}>Manage Account</button>
            <CollectionList handleViewCollection={this._handleViewCollection} user={this.state.user}/>
            <button onClick={this._toggleNewCollection}>Close Form</button>
            <AddCollection newCollection={this._handleNewCollection}/>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Hello, {this.state.user.firstName}</h3>
            <button onClick={this._toggleViewUpdateUser}>Manage Account</button>
            <CollectionList handleViewCollection={this._handleViewCollection} user={this.state.user}/>
            <button onClick={this._toggleNewCollection}>Add Collection</button>
          </div>
        )
      }

    }
  }
}

export default User;
