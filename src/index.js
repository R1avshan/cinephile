import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontStyles from './styles/fonts';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles />
    <GlobalStyles />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);


