import { render, h } from 'preact';
// import App from './App';
import App from './components/App';

let root = document.querySelector('#app');

// render(<App />, root);
render(
    h(App, null), root
);
