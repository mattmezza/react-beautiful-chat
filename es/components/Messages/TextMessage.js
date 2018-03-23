import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

var TextMessage = function TextMessage(props) {
  var meta = props.message.data.meta || null;
  var text = props.message.data.text || '';
  var author = props.message.author;
  return React.createElement(
    'div',
    { className: 'sc-message--text' },
    props.message && author === "me" && props.onDelete && React.createElement(
      'button',
      { className: 'delete-message', onClick: function onClick() {
          return props.onDelete(props.message);
        } },
      'x'
    ),
    text,
    meta && React.createElement(
      'p',
      { className: 'sc-message--meta' },
      meta
    )
  );
};

export default TextMessage;