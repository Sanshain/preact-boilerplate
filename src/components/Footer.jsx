//@ts-check

import { css } from '@linaria/core';


const footer = css`
  /* text-transform: uppercase; */
  color: green;  
  margin-top: 1em;
  font-style: bold;
  /* color: blue; */

  &>a{
    color: darkseagreen;
  }
`;



export default function Footer({children}) {
    return <div class={footer} title="based on linaria functionality">
        
        Welcome to {children}
    </div>
}