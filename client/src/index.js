import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import CartContext from './Context/CartContext';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContext>
        <App />
      </CartContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


