import React, { useState } from 'react';

const LoadingPage = (props) => {
  const [formLogin, setFormLogin] = useState({
    userName: '',
    password: '',
  });

  return (
    <div>
      Loading Page ...
    </div>
  )
}

export default LoadingPage;