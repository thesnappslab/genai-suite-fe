import App from './App';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
