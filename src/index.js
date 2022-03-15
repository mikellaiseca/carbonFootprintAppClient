import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router } from 'react-router-dom';

// import { MessageProviderWrapper } from './context/userMessage.context'
import { AuthProviderWrapper } from './context/auth.context'


import App from './App';


ReactDOM.render(

  <Router>

    <AuthProviderWrapper>
      {/* <MessageProviderWrapper> */}

      <App />

      {/* </MessageProviderWrapper> */}
    </AuthProviderWrapper>

  </Router>,
  document.getElementById('root')
);

