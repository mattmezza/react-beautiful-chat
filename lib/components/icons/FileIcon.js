'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileIcon = function (_Component) {
  _inherits(FileIcon, _Component);

  function FileIcon() {
    _classCallCheck(this, FileIcon);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FileIcon.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'label',
      { htmlFor: 'file-input' },
      _react2.default.createElement(
        'button',
        {
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur,
          className: 'sc-user-input--file-icon-wrapper',
          type: 'button'
        },
        _react2.default.createElement(
          'svg',
          {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            className: 'sc-user-input--file-icon',
            x: '0px',
            y: '0px',
            width: '24px',
            height: '24px',
            viewBox: '0 0 37.393 37.393',
            enableBackground: 'new 0 0 37.393 37.393'
          },
          _react2.default.createElement('path', { d: 'M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z' })
        )
      ),
      _react2.default.createElement('input', { type: 'file', id: 'file-input', onChange: function onChange(e) {
          return _this2.props.onChange(e.target.files[0]);
        }, onClick: function onClick(e) {
          return e.target.value = null;
        } })
    );
  };

  return FileIcon;
}(_react.Component);

exports.default = FileIcon;
module.exports = exports['default'];