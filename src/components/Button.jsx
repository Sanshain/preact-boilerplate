//@ts-check

import { css } from '@linaria/core';

const fonts = {
    heading: '12px'
}


const btn = css`
  text-transform: uppercase;
  color: red;
  color: green;

  /* comments inside css tag doesn't work: */
  
  &:hover{
    color: red;
  }
`;


export default function Button({ children }) {
    return <div class={btn}>
        linaria button
    </div>
}