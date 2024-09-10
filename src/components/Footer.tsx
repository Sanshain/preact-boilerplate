//@ts-check

import React from 'react';
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



export default function Footer({ user, children }: { user?: string, children?: React.ReactNode }) {
    return <div className={footer} title="based on linaria functionality">
        
      Welcome to {user}
    </div>
}