import React from 'react';
import {render} from 'react-dom';

import App from './App';
import { BrowserRouter } from "react-router-dom";


import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
