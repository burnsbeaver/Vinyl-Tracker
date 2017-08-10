import React, { Component } from 'react'

class Home extends Component {

  render () {
    return(
      <div>
        <h3>Login</h3>
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="submit" value="Login" />
        </form>
        <br/>
        <br/>
        <h3>Or, create an account</h3>
        <form>
          <input type="text" placeholder="email" />
          <br/>
          <input type="text" placeholder="Last Name" />
          <br/>
          <input type="text" placeholder="First Name" />
          <br/>
          <input type="text" placeholder="password" />
          <br/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default Home;
