import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css";
import App from './App/App.jsx'
import { BrowserRouter } from 'react-router-dom';


import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
