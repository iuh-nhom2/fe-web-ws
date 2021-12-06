import React, { useEffect, useState } from 'react';
import * as uuid from 'uuid';

import io from 'socket.io-client';
import { Container, Content, Card, MyMessage, OtherMessage } from './styles';
import {Button, Input} from 'reactstrap';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:3000');

const ChatScreen = ({}) => {
  const [title] = useState('Chat Web');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const userData = useSelector((state) => state.user.userData);
  
  useEffect(() => {
    function receivedMessage(message) {
      const newMessage = {
        id: uuid.v4(),
        name: message.name,
        text: message.text,
      };

      setMessages([...messages, newMessage]);
    }

    socket.on('msgToClient', (message) => {
      receivedMessage(message);
    });
  }, [messages]);

  function validateInput() {
    return  text.length > 0;
  }

  function sendMessage() {
    if (validateInput()) {
      console.log('userData', userData.userName)
      const message = {
        name: userData.userName || "value defaul",
        text,
      };

      socket.emit('msgToServer', message);
      setText('');
    }
  }

  return (
    <Container>
      <Content>
        
        <Card>
          <ul>
            {messages.map(message => {
              if (message.name ===  (userData?.userName || "value defaul")) {
                return (
                  <MyMessage key={message.id}>
                    <span>
                      {message.name}:
                    </span>

                    <p>{message.text}</p>
                  </MyMessage>
                );
              }

              return (
                <OtherMessage key={message.id}>
                  <span>
                    {message.name}:
                  </span>

                  <p>{message.text}</p>
                </OtherMessage>
              );
            })}
          </ul>
        </Card>
        <Input
          className="mt-3 mb-3"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter message..."
        />
        <Button color="primary" type={"button"} onClick={() => sendMessage()}>
          Send
        </Button>
      </Content>
    </Container>
  );
};

export default ChatScreen;
