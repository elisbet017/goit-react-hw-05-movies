import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
if (!root) throw new Error('Failed to find the root element');

ReactDOM.createRoot(root).render(
  <typeof React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </typeof React.StrictMode>
);
