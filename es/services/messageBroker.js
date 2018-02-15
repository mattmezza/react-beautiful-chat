import MESSAGE_TYPES from './../messageTypes';
var CLIENT = MESSAGE_TYPES.CLIENT;
var BROKER = MESSAGE_TYPES.BROKER;
var SOCKET_URL = process.env.SC_SOCKET_URL;
var io = require('socket.io-client');

var messageBroker = {
  init: function init() {
    var socket = io(SOCKET_URL);
    this.socket = socket;
    this.messageRecievedHandlers = [];
    socket.on(BROKER.VISITOR_ID, this.setVisitorId);
    socket.on(BROKER.MESSAGE, this.handleIncomingMessage.bind(this));
    var visitorId = this.getVisitorId();
    var teamId = this.getTeamId();

    if (!visitorId) {
      socket.emit(CLIENT.NEW_VISITOR, { teamId: teamId });
    } else {
      socket.emit(CLIENT.RETURNING_VISITOR, { visitorId: visitorId, teamId: teamId });
    }
  },
  sendMessage: function sendMessage(msg) {
    msg.visitorId = this.getVisitorId();
    msg.teamId = this.getTeamId();
    this.socket.emit(CLIENT.MESSAGE, msg);
  },
  handleIncomingMessage: function handleIncomingMessage(msg) {
    this.messageRecievedHandlers.forEach(function (handle) {
      return handle(msg);
    });
  },
  onMessageReceived: function onMessageReceived(handler) {
    this.messageRecievedHandlers.push(handler);
  },
  getVisitorId: function getVisitorId() {
    return 1;
  },
  getTeamId: function getTeamId() {
    return 1;
  },
  getTeamName: function getTeamName() {
    return 1;
  },
  getImageUrl: function getImageUrl() {
    return 1;
  },
  setVisitorId: function setVisitorId(data) {
    localStorage.setItem('SLACKCHAT.VISITOR_ID', data.visitorId);
  }
};

export default messageBroker;