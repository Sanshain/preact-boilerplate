//@ts-check

import React, { createElement } from 'react';
// import { createRoot } from 'react-dom/client';  // => https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
import { render } from 'react-dom';
import App from './App';

import { setup } from 'goober';


setup(createElement);

const root = document.querySelector('#app');

/// v/18:

// if (root) {
//     createRoot(root).render(<App />)
// }

/// v/17:
render(<App />, root);
