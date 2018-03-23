'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chatIcon = require('./../../assets/chat-icon.svg');

var _chatIcon2 = _interopRequireDefault(_chatIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(props) {
  var meta = props.message.data.meta || null;
  var text = props.message.data.text || '';
  var author = props.message.author;
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--text' },
    props.message && author === "me" && props.onDelete && _react2.default.createElement(
      'button',
      { className: 'delete-message', onClick: function onClick() {
          return props.onDelete(props.message);
        } },
      'x'
    ),
    text,
    meta && _react2.default.createElement(
      'p',
      { className: 'sc-message--meta' },
      meta
    )
  );
};

exports.default = TextMessage;
module.exports = exports['default'];