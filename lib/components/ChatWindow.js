'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _UserInput = require('./UserInput');

var _UserInput2 = _interopRequireDefault(_UserInput);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _react2.default.createElement(
      'div',
      { className: classList.join(' ') },
      _react2.default.createElement(_Header2.default, {
        teamName: this.props.agentProfile.teamName,
        imageUrl: this.props.agentProfile.imageUrl,
        onClose: this.props.onClose
      }),
      _react2.default.createElement(_MessageList2.default, {
        messages: messageList,
        imageUrl: this.props.agentProfile.imageUrl
      }),
      _react2.default.createElement(_UserInput2.default, {
        userInput: this.props.userInput,
        showEmoji: this.props.showEmoji,
        onSubmit: this.onUserInputSubmit.bind(this),
        showFile: this.props.showFile
      })
    );
  };

  return ChatWindow;
}(_react.Component);

ChatWindow.propTypes = process.env.NODE_ENV !== "production" ? {
  agentProfile: _propTypes2.default.shape({
    teamName: _propTypes2.default.string,
    imageUrl: _propTypes2.default.string
  }),
  userInput: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  onUserInputSubmit: _propTypes2.default.func,
  messageList: _propTypes2.default.arrayOf(_propTypes2.default.object),
  isOpen: _propTypes2.default.bool,
  showEmoji: _propTypes2.default.bool,
  showFile: _propTypes2.default.bool
} : {};

exports.default = ChatWindow;
module.exports = exports['default'];