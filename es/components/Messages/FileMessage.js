import React from 'react';
import genericFileIcon from '../../assets/file.svg';

var FileMessage = function FileMessage(props) {
  return React.createElement(
    'div',
    { className: 'sc-message--file' },
    React.createElement(
      'div',
      { className: 'sc-message--file-icon' },
      React.createElement(
        'a',
        { href: props.data.file.url || '#', target: '_blank' },
        React.createElement('img', { src: genericFileIcon, alt: 'generic file icon', height: 60 })
      )
    ),
    React.createElement(
      'div',
      { className: 'sc-message--file-name' },
      React.createElement(
        'a',
        { href: props.data.file.url ? props.data.file.url : '#', target: '_blank' },
        props.data.file.name
      )
    ),
    props.data.text && props.data.text !== "undefined" ? React.createElement(
      'div',
      { className: 'sc-message--file-text' },
      props.data.text
    ) : '',
    props.data.meta && React.createElement(
      'p',
      { className: 'sc-message--meta' },
      props.data.meta
    )
  );
};

export default FileMessage;