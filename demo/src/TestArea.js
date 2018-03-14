import React, { Component } from 'react'

class TestArea extends Component {
  render () {
    return (
      <div className="demo-test-area--wrapper">
        <div className="demo-test-area--title">
          <div className="demo-test-area--title-main">react-beautiful-chat demo</div>
          <div className="demo-test-area--title-sub">based on <a href="https://github.com/kingofthestack/react-live-chat">react-chat-window</a></div>
        </div>
        <form className="demo-test-area" onSubmit={(e)=> {
            e.preventDefault();
            this.props.onMessage(this.textArea.value);
            this.textArea.value = '';
          }}>
          <div className="demo-test-area--preamble">Test the chat window by sending a message:</div>
          <textarea
            ref={(e) => { this.textArea = e; }}
            className="demo-test-area--text"
            placeholder="Write a test message...."
          />
          <button className="demo-test-area--button"> Send Message! </button>
        </form>
        <p className="demo-test-area--info">
          <a href="https://github.com/mattmezza/react-beautiful-chat">react-beautiful-chat</a> is a chat window that allows you to build and add custom live chat to your sites. It includes only the react chat widget. There is no backend, and no communication system baked in.
          <br />
          It is based on <a href="https://github.com/kingofthestack/react-live-chat">react-chat-window</a> and adds some features to it, like optional emoji and file messages.
          <br />
          <br />
          For instructions on how to use it click <a href="https://github.com/mattmezza/react-beautiful-chat">here</a>.
        </p>
      </div>
    )
  }
}

export default TestArea
