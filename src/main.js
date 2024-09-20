
//@ts-check

import { xProvider } from "./store/Provider";
import { render } from 'preact';
import App from './App';


let root = document.querySelector('#app');
root && document.body.appendChild(root);
render(
    // <App />,
    //@ts-expect-error
    <xProvider><App /></xProvider>,
    //@ts-expect-error
    root
);
