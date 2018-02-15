import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

var TextMessage = function TextMessage(props) {
  return React.createElement(
    'div',
    { className: 'sc-message--text' },
    props.data.text,
    props.data.meta && React.createElement(
      'p',
      { className: 'sc-message--meta' },
      props.data.meta
    )
  );
};

export default TextMessage;