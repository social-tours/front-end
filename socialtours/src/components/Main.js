import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Main extends Component {

  render() {
    return (
      <>
        {!this.props.auth.isAuthenticated() &&
          <button onClick={this.props.auth.login}>login</button>}
        <p><Link to="/protected">Protected page</Link></p>
      </>
    )
  }
}
