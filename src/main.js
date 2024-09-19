//@ts-check

// import { render } from 'preact';

import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './App';

const rootNode = document.querySelector('#app');

if (rootNode) {
    const root = createRoot(rootNode);
    root.render(<App />, );
}
else {
    console.error(`rootNode is not found`)
}



