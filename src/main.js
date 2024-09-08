//@ts-check

import App from './App';

import { render } from 'react-dom';                     // <= deprecated since react 17



import React from 'react'
import { createRoot } from 'react-dom/client';



let container = document.querySelector('#app');
// render(<App />, container);                               // <= deprecated since react 18


if (container) {
    const root = createRoot(container);    
    root.render(<App />)
}
else {
    console.warn("container `#app` doesn't found...");
}
