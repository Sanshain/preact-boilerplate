import { render, h } from 'preact';
// import App from './App';
import App from './components/App';

import { setup } from 'goober';
setup(h);


let root = document.querySelector('#app');

// document.body.appendChild(root);

render(<App />, root);
