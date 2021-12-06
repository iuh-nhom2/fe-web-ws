import React from 'react';
import {withRouter, useHistory} from 'react-router-dom';


const ChatScreen = (prosp) => {
  const history = useHistory();
  return (
    <div onClick={()=>{ 
      history.push('/login')
    }}>
      qweqweqe
    </div>
  )
}

export default withRouter(ChatScreen);