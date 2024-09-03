//@ts-check

import { render, h } from 'preact';
import App from './App';
import { setup } from 'goober';


// Should be called here, and just once
setup(h);

let root = document.querySelector('#app');

render(<App />, root);
