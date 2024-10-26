// ts-check

// import ReactDOM from 'react-dom';

import { render } from "react";
import App from "./App";
import React from "react";

let root = document.querySelector("#app");
render(React.createElement(App, null), root);

// render(<App />, root);

/// TO CHECK JSDOC LINTER:

function func(a) {
   console.log(a);
}

func(9);
