import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import { store, history } from './store';

import './styles/main.scss';
import './styles/grid.css';
import './assets/cursor.svg';

import App from './components/App';
import Home from './components/Pages/Home/index';
import Demo from './components/Pages/Demo/index';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/admin" component={Admin} />
        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
