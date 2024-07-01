import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBddHv5VTm2l8gMOVaGgHl4HUU9dOdtlTo",
//   authDomain: "myfolio-1618.firebaseapp.com",
//   projectId: "myfolio-1618",
//   storageBucket: "myfolio-1618.appspot.com",
//   messagingSenderId: "154330872867",
//   appId: "1:154330872867:web:545311706b56c0238a8596"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
