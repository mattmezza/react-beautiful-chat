'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chatIcon = require('./../../assets/chat-icon.svg');

var _chatIcon2 = _interopRequireDefault(_chatIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--text' },
    props.data.text,
    props.data.meta && _react2.default.createElement(
      'p',
      { className: 'sc-message--meta' },
      props.data.meta
    )
  );
};

exports.default = TextMessage;
module.exports = exports['default'];