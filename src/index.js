import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setLan } from './i18n/index';

let language =  'en'
if (language.length > 0) {
  try {
    localStorage.setItem('language', language);
  } catch (e) {
    console.log('setLocalstorage fail', e);
  }
} else {
  language = localStorage.getItem('language');
}

if (language === 'en') {
  setLan('en-US');
} else {
  setLan('zh-CN');
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);