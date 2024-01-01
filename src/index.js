import React from 'react';
import ReactDOM from 'react-dom/client';

// import store from './redux/store';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
 let persistor = persistStore(store)
root.render(
  <Provider store={store}>
  <React.StrictMode>
   <HashRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
   </HashRouter>
    
   
  </React.StrictMode>
  </Provider>
);

