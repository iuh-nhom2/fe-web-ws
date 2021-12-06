import io from 'socket.io-client';
import _ from 'lodash';
import emitter from './emiterEvent';

class SocketIOClient {
  constructor(){
    this.socket = io('http://localhost:3000');
    
  }

  connectToServer() {
    if(!this.socket) {
      console.log('disconnect')
      return;
    } 
    
  }

  sendMessage(messageData) {
    this.socket.emit('sendMessage', messageData);
  } 

  getMessage(){
    this.socket.on('newMessage', (message) => {
      console.log('newMessage', message);
      emitter.emit('NEW_MESSAGE' , message);
    })
  }
  
} 

const socketIoClient = new SocketIOClient;
export default socketIoClient;