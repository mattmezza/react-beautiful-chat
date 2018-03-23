import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  const meta = props.message.data.meta || null
  const text = props.message.data.text || ''
  const author = props.message.author
  return (
    <div className="sc-message--text">
      {
        props.message && 
        author === "me" && 
        props.onDelete && 
          <button className='delete-message' onClick={() => props.onDelete(props.message)}>
            x
          </button>
      }
      {text}
      {meta && <p className='sc-message--meta'>{meta}</p>}
    </div>
    )
}

export default TextMessage