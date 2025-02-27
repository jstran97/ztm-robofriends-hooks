import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'; // same as App from './App.js';
// import Card from './Card';
 // same as Card from './Card.js';

import CardList from './components/CardList';

import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CardList robots={robots}/> */}
    <App />
  </React.StrictMode>
);

// ReactDOM.render() = NO LONGER SUPPORTED in React v18.
// Use createRoot instead.
// ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
