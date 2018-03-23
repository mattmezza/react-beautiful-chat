# react-beautiful-chat

`react-beautiful-chat` provides an intercom-like chat window that can be included easily in any project for free. It provides no messaging facilities, only the view component.

`react-beautiful-chat` is an improved version of `react-chat-window` (which you can find [here](https://github.com/kingofthestack/react-live-chat))

<a href="https://www.npmjs.com/package/react-beautiful-chat" target="\_parent">
  <img alt="" src="https://img.shields.io/npm/dm/react-beautiful-chat.svg" />
</a>
<a href="https://github.com/mattmezza/react-beautiful-chat" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/mattmezza/react-beautiful-chat.svg?style=social&label=Star" />
</a>

![gif](https://media.giphy.com/media/3ohs4wE4DqXw84xAMo/giphy.gif)

## Features

- Customizeable
- Backend agnostic
- Free

## [Demo](https://mattmezza.github.io/react-beautiful-chat/)

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Components](#api)

## Installation

```
$ npm install react-beautiful-chat
```

## Example

``` javascript
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-beautiful-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}
```

For more detailed examples see the demo folder.

## Components

# Launcher

`Launcher` is the only component needed to use react-beautiful-chat. It will react dynamically to changes in messages. All new messages must be added via a change in props as shown in the example.

Launcher props:

|prop | type   | description |
|-----|--------|---------------|
| *agentProfile | object | Represents your product or service's customer service agent. Fields: teamName, imageUrl|
| onMessageWasSent | function(message) | Called when a message a message is sent with a message object as an argument. |
| messageList | [message] | An array of message objects to be rendered as a conversation. |
| showEmoji | bool | A bool indicating whether or not to show the emoji button
| showFile | bool | A bool indicating whether or not to show the file chooser button
| onKeyPress | func | A function `(userInput) => console.log(userInput)` used to do something with the user input. The function is invoked debounced at 300ms
| onDelete | func | A function `(msg) => console.log(msg)` used to delete a sent message. If this props is set, a delete button will be shown in the top right corner of each message sent by the user to a partner. You can set any property on the message object (an `id` property for instance) and then use this property to call some backend api to delete the message.


### Message Objects

Message objects are rendered differently depending on their type. Currently, only text and emoji types are supported. Each message object has an `author` field which can have the value 'me' or 'them'.

``` javascript
{
  author: 'them',
  type: 'text',
  data: {
    text: 'some text'
  }
}

{
  author: 'me',
  type: 'emoji',
  data: {
    code: 'someCode'
  }
}

{
  author: 'me',
  type: 'file',
  data: {
    name: 'file.mp3',
    url: 'https:123.rf/file.mp3'
  }
}

```

