//@ts-check
import { render, createElement as h } from 'react';
import App from './App';
import { setup } from 'goober';

setup(h);


let root = document.querySelector('#app');
// document.body.appendChild(root);
render(<App />, root);
