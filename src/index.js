import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
// import express from 'express';
// import session from 'express-session'
// const  app = express();


// // express session
// app.use(session({
//   secret: 'keyboardasdfdasdf',
//   resave: true,
//   saveUninitialized: true,
//   name :'react-frontend'
//  // cookie: { secure: true }
// }));


ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
,
  document.getElementById('root')
  
);