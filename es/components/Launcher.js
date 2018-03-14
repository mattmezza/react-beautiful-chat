function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';

var Launcher = function (_Component) {
  _inherits(Launcher, _Component);

  function Launcher() {
    _classCallCheck(this, Launcher);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      launcherIcon: launcherIcon,
      isOpen: false
    };
    return _this;
  }

  Launcher.prototype.handleClick = function handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  Launcher.prototype.render = function render() {
    var isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    var classList = ['sc-launcher', isOpen ? 'opened' : ''];
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: classList.join(' '), onClick: this.handleClick.bind(this) },
        React.createElement(MessageCount, { count: this.props.newMessagesCount, isOpen: isOpen }),
        React.createElement('img', { className: "sc-open-icon", src: launcherIconActive }),
        React.createElement('img', { className: "sc-closed-icon", src: launcherIcon })
      ),
      React.createElement(ChatWindow, {
        userInput: this.props.userInput,
        messageList: this.props.messageList,
        onUserInputSubmit: this.props.onMessageWasSent,
        agentProfile: this.props.agentProfile,
        isOpen: isOpen,
        onClose: this.handleClick.bind(this),
        showEmoji: this.props.showEmoji,
        showFile: this.props.showFile
      })
    );
  };

  return Launcher;
}(Component);

var MessageCount = function MessageCount(props) {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return React.createElement(
    'div',
    { className: "sc-new-messsages-count" },
    props.count
  );
};

Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  userInput: PropTypes.string,
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  showEmoji: PropTypes.bool,
  showFile: PropTypes.bool
} : {};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true,
  showFile: true
};

export default Launcher;