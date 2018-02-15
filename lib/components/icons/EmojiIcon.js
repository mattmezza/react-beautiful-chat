'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmojiPicker = require('./../emoji-picker/EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmojiIcon = function (_Component) {
  _inherits(EmojiIcon, _Component);

  function EmojiIcon() {
    _classCallCheck(this, EmojiIcon);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      isActive: false
    };
    return _this;
  }

  EmojiIcon.prototype._handlePickerBlur = function _handlePickerBlur() {
    this.setState({
      isActive: false
    });
  };

  EmojiIcon.prototype._openPicker = function _openPicker(e) {
    e.preventDefault();
    this.setState({
      isActive: !this.state.isActive
    });
  };

  EmojiIcon.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'sc-user-input--picker-wrapper' },
      this.state.isActive && _react2.default.createElement(_EmojiPicker2.default, {
        onEmojiPicked: this.props.onEmojiPicked,
        onBlur: this._handlePickerBlur.bind(this)
      }),
      _react2.default.createElement(
        'button',
        {
          onClick: this._openPicker.bind(this),
          className: 'sc-user-input--emoji-icon-wrapper'
        },
        _react2.default.createElement(
          'svg',
          {
            className: 'sc-user-input--emoji-icon ' + (this.props.isActive ? 'active' : ''),
            version: '1.1',
            id: 'Layer_2',
            xmlns: 'http://www.w3.org/2000/svg',
            x: '0px',
            y: '0px',
            width: '37.393px',
            height: '37.393px',
            viewBox: '0 0 37.393 37.393',
            enableBackground: 'new 0 0 37.393 37.393'
          },
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z'
            })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('circle', { cx: '12.379', cy: '14.359', r: '1.938' })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('circle', { cx: '24.371', cy: '14.414', r: '1.992' })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z'
            })
          )
        )
      )
    );
  };

  return EmojiIcon;
}(_react.Component);

;

exports.default = EmojiIcon;
module.exports = exports['default'];