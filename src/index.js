import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import { UserContextProvider } from './contexts/user.context';
import reportWebVitals from './reportWebVitals';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { store, persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <React>
    <BrowserRouter>
      <Provider store={ store }>
        <PersistGate persistor={ persistor } loading = {null}>
        {/* <UserContextProvider> */}
          {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <App />
            {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
        {/* </UserContextProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  // </React>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
