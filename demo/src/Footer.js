import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className="demo-footer">
        <div>
          <div>&copy; {new Date().getFullYear()} mattmezza/react-beautiful-chat</div>
          <div>Improved and customized by <a href="https://github.com/mattmezza">@mattmezza</a>, <a href="https://github.com/IlyasAbdighni">@IlyasAbdighni</a> and <a href="https://github.com/joke2k">@joke2k</a></div>
        </div>
        <div>
          <div>Improved version of react-chat-window</div>
        </div>
      </div>
    )
  }
}

export default Footer