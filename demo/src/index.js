import React, { Component } from 'react'
import { render } from 'react-dom'
import { Launcher } from '../../src'
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import Highlight from "react-highlight.js";
import './../assets/styles'



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false
    };
    this.lastId = messageHistory[messageHistory.length - 1].id
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, {id: this.lastId + 1, ...message}]
    })
    this.lastId += 1
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          id: this.lastId + 1,
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
      this.lastId += 1
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    })
  }

  onKeyPress = (userInput) => {
    console.log(userInput)
  }

  onDelete = (msg) => {
    this.setState({messageList: this.state.messageList.filter(({id}) => id!==msg.id)})
  }

  render() {
    return <div>
      <Header />
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: 'react-beautiful-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
        onKeyPress={this.onKeyPress}
        onDelete={this.onDelete}
        showEmoji
        showFile
      />
      <div style={{height: 200}} />
      <Footer />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
