
import './style.css'
import { ComponentChildren, h } from "preact";


/// @ LINAIRIA:

// till just with css:
import { css } from '@linaria/core';


/// @ GOOBER:

import { default as Title } from "./components/Title";

// import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';




/// @* linaria:

const fonts = {
  heading: 'Arial'
}

const app = css`
  /* text-transform: uppercase; */
  color: red;
  font-family: ${fonts.heading};
  /* font-size: $ {modularScale(2)} */
  /* color: blue; */
`;


/// @* typescript:

interface ChildrenProps {
  title?: string;
  children?: ComponentChildren;
}


/// @ JSX:

function App({ title = 'budy', children }: ChildrenProps): h.JSX.Element {
  return (
    <div class={app}>
      <Title />
      <h1>Hello World, {title}!</h1>
      <div className="header">111-111-1112</div>
    </div>
  );
}

export default App;



// for more information about preact typing, see https://preactjs.com/guide/v10/typescript/#typescript-configuration