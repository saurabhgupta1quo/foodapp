import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import configureStore from './store/configureStore';

import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import FormContainer from './containers/FormContainer';

// const store = createStore(reducer);

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
<Router>
    <div>
       {/* <b>
        <NavLink exact activeClassName="active" className="menu" to="/">Display List of Food Items</NavLink>
        <NavLink activeClassName="active" className="menu" to="/FormContainer">Add Items</NavLink>
      </b> */}
      {/* <hr /> */}
      <Switch>
      <Route exact path="/" component = {App} />
      <Route exact path="/FormContainer/" component = {FormContainer} />
      </Switch>
    </div>
  </Router>
  {/* <App /> */}
</Provider>, 
document.getElementById('root')
);

store.propTypes = {
  store: PropTypes.object.isRequired
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
