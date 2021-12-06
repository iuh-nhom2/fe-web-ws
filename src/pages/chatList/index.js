import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import MainLayout from '../../components/mainLayout';
import ChatScreen from '../../components/ChatScreen';
import ListChatUser from './listUserChat';

const ChatList = (props) => {
  const history = useHistory();
  return (
    <MainLayout 
      childrenLeft={()=> {
        return (
          <ListChatUser />
        )
      }}
      childrenRight={()=>{
        return (
          <ChatScreen />
        )
      }}
    />
  )
}

export default withRouter(ChatList);