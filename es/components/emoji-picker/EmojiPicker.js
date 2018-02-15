function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';

var EmojiPicker = function (_Component) {
  _inherits(EmojiPicker, _Component);

  function EmojiPicker() {
    _classCallCheck(this, EmojiPicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.emojiConvertor = new EmojiConvertor();
    _this.emojiConvertor.init_env();
    return _this;
  }

  EmojiPicker.prototype.componentDidMount = function componentDidMount() {
    var elem = this.domNode;
    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {
      elem.style.transition = 'opacity 350ms';
      elem.style.opacity = 1;
    });
    this.domNode.focus();
  };

  EmojiPicker.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      {
        tabIndex: '0',
        onBlur: this.props.onBlur,
        className: 'sc-emoji-picker',
        ref: function ref(e) {
          _this2.domNode = e;
        }
      },
      React.createElement(
        'div',
        { className: 'sc-emoji-picker--content' },
        emojiData.map(function (category) {
          return React.createElement(
            'div',
            { className: 'sc-emoji-picker--category', key: category.name },
            React.createElement(
              'div',
              { className: 'sc-emoji-picker--category-title' },
              category.name
            ),
            category.emojis.map(function (emoji) {
              return React.createElement(
                'span',
                {
                  key: emoji,
                  className: 'sc-emoji-picker--emoji',
                  onClick: function onClick() {
                    _this2.props.onEmojiPicked(emoji);
                    _this2.domNode.blur();
                  }
                },
                emoji
              );
            })
          );
        })
      )
    );
  };

  return EmojiPicker;
}(Component);

export default EmojiPicker;