import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // estra libreria nos permite navegar dentro de la aplicacion, con rutas y links intercambiando vistas de una manera mas fluida ya q la renderizacion del contenido se hace siempre desde el mismo archivo (index.js) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/*esto es para permitirle a la aplicacion utilizar los componentes q nos da react router  */}
     <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
