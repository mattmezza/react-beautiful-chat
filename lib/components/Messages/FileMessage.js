'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _file = require('../../assets/file.svg');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileMessage = function FileMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--file' },
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-icon' },
      _react2.default.createElement(
        'a',
        { href: props.data.file.url || '#', target: '_blank' },
        _react2.default.createElement('img', { src: _file2.default, alt: 'generic file icon', height: 60 })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sc-message--file-name' },
      _react2.default.createElement(
        'a',
        { href: props.data.file.url ? props.data.file.url : '#', target: '_blank' },
        props.data.file.name
      )
    ),
    props.data.text && props.data.text !== "undefined" ? _react2.default.createElement(
      'div',
      { className: 'sc-message--file-text' },
      props.data.text
    ) : '',
    props.data.meta && _react2.default.createElement(
      'p',
      { className: 'sc-message--meta' },
      props.data.meta
    )
  );
};

exports.default = FileMessage;
module.exports = exports['default'];