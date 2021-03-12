import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {message:'post text', likes:'❤ 15'},
    {message:'post text', likes:'❤ 15'},
    {message:'post text', likes:'❤ 15'},
    {message:'post text', likes:'❤ 15'},
    {message:'post text', likes:'❤ 15'}
]
let dialogs = [
    {name: 'User1', id: 1},
    {name: 'User1', id: 1},
    {name: 'User1', id: 1},
    {name: 'User1', id: 1},
    {name: 'User1', id: 1}
]
let messages = [
    {message: 'text message'},
    {message: 'text message'},
    {message: 'text message'},
    {message: 'text message'},
    {message: 'text message'}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
