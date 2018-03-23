'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _file = require('../../assets/file.svg');

var _file2 = _interopRequireDefault(_file);

var _close = require('../../assets/close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileMessage = function FileMessage(props) {
  var meta = props.message.data.meta || null;
  var text = props.message.data.text || '';
  var file = props.message.data.file;
  var author = props.message.author;
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--file' },
    props.message && author === "me" && props.onDelete && _react2.default.createElement(
      'button',
      { className: 'delete-message', onClick: function onClick() {
          return props.onDelete(props.message);
        } },
      'x'
    ),
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-icon' },
      _react2.default.createElement(
        'a',
        { href: file.url || '#', target: '_blank' },
        _react2.default.createElement('img', { src: _file2.default, alt: 'generic file icon', height: 60 })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-name' },
      _react2.default.createElement(
        'a',
        { href: file.url ? file.url : '#', target: '_blank' },
        file.name
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-text' },
      text
    ),
    meta && _react2.default.createElement(
      'p',
      { className: 'sc-message--meta' },
      meta
    )
  );
};

exports.default = FileMessage;
module.exports = exports['default'];