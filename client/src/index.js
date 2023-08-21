import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import Global from './hoc/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global>
        <App />
      </Global>
    </BrowserRouter>
  </React.StrictMode>
);
