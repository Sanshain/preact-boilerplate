//@ts-check

import { css } from '@linaria/core';


const footer = css`
  text-transform: uppercase;
  color: red;  
  margin-top: 1em;
  /* color: blue; */
`;



export default function Footer({children}) {
    return <div class={footer}>
        
        footer of {children}
    </div>
}