//@ts-check

import { css } from '@linaria/core';




/// ADDITIONAL LINARIA OPPORTUNITIES:

// import { modularScale, hiDPI } from 'polished';

// font - size: ${ modularScale(2) };
//   ${ hiDPI(1.5) } {
//   font - size: ${ modularScale(2.5) };
// }

const fontSize = 12;

const footer = css`
  /* text-transform: uppercase; */
  color: green;  
  margin-top: 1em;
  font-style: bold;
  /* color: blue; */
  font-size: ${fontSize};

  &>a{
    color: darkseagreen;
  }
`;



export default function Footer({children}) {
    return <div class={footer} title="based on linaria functionality">
        
        Welcome to {children}
    </div>
}