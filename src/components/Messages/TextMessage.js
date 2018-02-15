import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  return (
    <div className="sc-message--text">
      {props.data.text}
      {props.data.meta && <p className='sc-message--meta'>{props.data.meta}</p>}
    </div>
    )
}

export default TextMessage