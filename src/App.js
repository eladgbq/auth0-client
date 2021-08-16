import './App.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Login = lazy(() => import('./components/Login'));
const LoginHistory = lazy(() => import('./components/LoginHistory'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/loginHistory" component={LoginHistory} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
