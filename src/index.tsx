import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import { BeerList } from './BeerList';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Counter/>
    <BeerList beers={["Coreff", "Corona", "Mort Subite"]}/>
    {/* <About/> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
