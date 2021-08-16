import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6twpx43d.us.auth0.com"
      clientId="uWBu0q4uIbQz6td4D6iyMcYbh9rpKj0Y"
      redirectUri={window.location.origin + '/loginHistory'}
      audience="https://login-history-server.herokuapp.com"
      scope="read:logins"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
