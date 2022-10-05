import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ShoeProvider } from './context/ShoeContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoeProvider>
        <App />
      </ShoeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
