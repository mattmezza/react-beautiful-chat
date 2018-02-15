'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SendIcon = require('./icons/SendIcon');

var _SendIcon2 = _interopRequireDefault(_SendIcon);

var _EmojiIcon = require('./icons/EmojiIcon');

var _EmojiIcon2 = _interopRequireDefault(_EmojiIcon);

var _EmojiPicker = require('./emoji-picker/EmojiPicker');

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _FileIcon = require('./icons/FileIcon');

var _FileIcon2 = _interopRequireDefault(_FileIcon);

var _close = require('../assets/close.svg');

var _close2 = _interopRequireDefault(_close);

var _file = require('../assets/file.svg');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInput = function (_Component) {
  _inherits(UserInput, _Component);

  function UserInput() {
    _classCallCheck(this, UserInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      inputActive: false,
      file: null
    };
    return _this;
  }

  UserInput.prototype.handleKey = function handleKey(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this._submitText(event);
    }
  };

  UserInput.prototype._submitText = function _submitText(event) {
    event.preventDefault();
    var text = this.userInput.textContent;
    var file = this.state.file;
    if (file) {
      if (text && text.length > 0) {
        this.props.onSubmit({
          author: 'me',
          type: 'file',
          data: { text: text, file: file }
        });
        this.setState({ file: null });
        this.userInput.innerHTML = '';
      } else {
        this.props.onSubmit({
          author: 'me',
          type: 'file',
          data: { file: file }
        });
        this.setState({ file: null });
      }
    } else {
      if (text && text.length > 0) {
        this.props.onSubmit({
          author: 'me',
          type: 'text',
          data: { text: text }
        });
        this.userInput.innerHTML = '';
      }
    }
  };

  UserInput.prototype._handleEmojiPicked = function _handleEmojiPicked(emoji) {
    this.props.onSubmit({
      author: 'me',
      type: 'emoji',
      data: { emoji: emoji }
    });
  };

  UserInput.prototype._handleFileSubmit = function _handleFileSubmit(file) {
    this.setState({ file: file });
  };

  UserInput.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      null,
      this.state.file && _react2.default.createElement(
        'div',
        { className: 'file-container' },
        _react2.default.createElement(
          'span',
          { className: 'icon-file-message' },
          _react2.default.createElement('img', { src: _file2.default, alt: 'genericFileIcon', height: 15 })
        ),
        this.state.file && this.state.file.name,
        _react2.default.createElement(
          'span',
          { className: 'delete-file-message', onClick: function onClick() {
              return _this2.setState({ file: null });
            } },
          _react2.default.createElement('img', { src: _close2.default, alt: 'close icon', height: 10, title: 'Remove the file' })
        )
      ),
      _react2.default.createElement(
        'form',
        { className: 'sc-user-input ' + (this.state.inputActive ? 'active' : '') },
        _react2.default.createElement('div', {
          role: 'button',
          tabIndex: '0',
          onFocus: function onFocus() {
            _this2.setState({ inputActive: true });
          },
          onBlur: function onBlur() {
            _this2.setState({ inputActive: false });
          },
          ref: function ref(e) {
            _this2.userInput = e;
          },
          onKeyDown: this.handleKey.bind(this),
          contentEditable: 'true',
          placeholder: 'Write a reply...',
          className: 'sc-user-input--text'
        }),
        _react2.default.createElement(
          'div',
          { className: 'sc-user-input--buttons' },
          _react2.default.createElement('div', { className: 'sc-user-input--button' }),
          _react2.default.createElement(
            'div',
            { className: 'sc-user-input--button' },
            this.props.showEmoji && _react2.default.createElement(_EmojiIcon2.default, { onEmojiPicked: this._handleEmojiPicked.bind(this) })
          ),
          this.props.showFile && _react2.default.createElement(
            'div',
            { className: 'sc-user-input--button' },
            _react2.default.createElement(_FileIcon2.default, { onChange: function onChange(file) {
                return _this2._handleFileSubmit(file);
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'sc-user-input--button' },
            _react2.default.createElement(_SendIcon2.default, { onClick: this._submitText.bind(this) })
          )
        )
      )
    );
  };

  return UserInput;
}(_react.Component);

UserInput.propTypes = process.env.NODE_ENV !== "production" ? {
  onSubmit: _propTypes2.default.func.isRequired,
  showEmoji: _propTypes2.default.bool,
  showFile: _propTypes2.default.bool
} : {};

exports.default = UserInput;
module.exports = exports['default'];