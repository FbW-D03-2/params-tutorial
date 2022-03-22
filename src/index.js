import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OtherComponent from "./OtherComponent";
import ThirdComponent from "./ThirdComponent";
ReactDOM.render(
  <React.StrictMode>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/params-tutorial" element={<App />} />
        <Route path="other/:param1" element={<OtherComponent/>} />
        <Route path="other/:param1/:param2" element={<ThirdComponent />} />
        <Route path="/:blabla" element={<App />} />
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
