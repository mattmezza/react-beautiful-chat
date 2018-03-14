function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';

var ChatWindow = function (_Component) {
  _inherits(ChatWindow, _Component);

  function ChatWindow(props) {
    _classCallCheck(this, ChatWindow);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  ChatWindow.prototype.onUserInputSubmit = function onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  };

  ChatWindow.prototype.onMessageReceived = function onMessageReceived(message) {
    this.setState({ messages: [].concat(this.state.messages, [message]) });
  };

  ChatWindow.prototype.render = function render() {
    var messageList = this.props.messageList || [];
    var classList = ["sc-chat-window", this.props.isOpen ? "opened" : "closed"];
    return React.createElement(
      'div',
      { className: classList.join(' ') },
      React.createElement(Header, {
        teamName: this.props.agentProfile.teamName,
        imageUrl: this.props.agentProfile.imageUrl,
        onClose: this.props.onClose
      }),
      React.createElement(MessageList, {
        messages: messageList,
        imageUrl: this.props.agentProfile.imageUrl
      }),
      React.createElement(UserInput, {
        userInput: this.props.userInput,
        showEmoji: this.props.showEmoji,
        onSubmit: this.onUserInputSubmit.bind(this),
        showFile: this.props.showFile
      })
    );
  };

  return ChatWindow;
}(Component);

ChatWindow.propTypes = process.env.NODE_ENV !== "production" ? {
  agentProfile: PropTypes.shape({
    teamName: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  userInput: PropTypes.string,
  onClose: PropTypes.func,
  onUserInputSubmit: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  showEmoji: PropTypes.bool,
  showFile: PropTypes.bool
} : {};

export default ChatWindow;