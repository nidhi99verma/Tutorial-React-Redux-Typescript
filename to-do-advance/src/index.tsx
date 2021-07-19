import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from 'reducers';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
