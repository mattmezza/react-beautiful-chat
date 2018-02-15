import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title">react-beautiful-chat</div>
        <div className="demo-header--links">
          <a href="https://github.com/mattmezza/react-beautiful-chat">GitHub</a>
        </div>
      </div>
    )
  }
}

export default Header