import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import { init } from './functions/language/langHandler';
init()

import { save } from './functions/Utils/search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


save()