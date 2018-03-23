import React from 'react';
import genericFileIcon from '../../assets/file.svg';
import closeIcon from '../../assets/close.svg';

var FileMessage = function FileMessage(props) {
  var meta = props.message.data.meta || null;
  var text = props.message.data.text || '';
  var file = props.message.data.file;
  var author = props.message.author;
  return React.createElement(
    'div',
    { className: 'sc-message--file' },
    props.message && author === "me" && props.onDelete && React.createElement(
      'button',
      { className: 'delete-message', onClick: function onClick() {
          return props.onDelete(props.message);
        } },
      'x'
    ),
    React.createElement(
      'div',
      { className: 'sc-message--file-icon' },
      React.createElement(
        'a',
        { href: file.url || '#', target: '_blank' },
        React.createElement('img', { src: genericFileIcon, alt: 'generic file icon', height: 60 })
      )
    ),
    React.createElement(
      'div',
      { className: 'sc-message--file-name' },
      React.createElement(
        'a',
        { href: file.url ? file.url : '#', target: '_blank' },
        file.name
      )
    ),
    React.createElement(
      'div',
      { className: 'sc-message--file-text' },
      text
    ),
    meta && React.createElement(
      'p',
      { className: 'sc-message--meta' },
      meta
    )
  );
};

export default FileMessage;