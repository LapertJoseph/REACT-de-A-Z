import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Ce fichier permet a retourner dans notre application dans la div root du html

ReactDOM.render(        // retourner l'application 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // dans la div root
);
