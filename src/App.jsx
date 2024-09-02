//@ts-check

// import './App.css';
// import './style.css';


import style from './style.css';
// import { createElement as h } from "react";
// import { createElement as h } from '../node_modules/preact/src/index';
import { createElement as h } from '../modules/preact/index';


// till just with css:
import { css } from '@linaria/core';


// import { styled, setup } from '../node_modules/goober/src/index';
import { styled, setup } from '../modules/goober/index';
setup(h);


/// EXAMPLE WITH `STYLED` TAG - TILL DOESN'T WORK

// import { default as Title } from "./components/Title";     // till doesn't work: (so there isn't reason to work under branch with emotion):


/// OPTIONAL DEPENDENCIES:

// import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';




const app = css`
  text-transform: uppercase;
  color: red;
  color: green;
`;

/// comments inside css tag doesn't work:

/* font-family: ${fonts.heading};
font-size: ${modularScale(2)};
${hiDPI(1.5)} {
  font-size: ${modularScale(2.5)};
} */


const Icon = styled('span')`
    display: flex;
    flex: 1;
    color: red;
`;

const Button = styled('button')`
    background: dodgerblue;
    color: white;
    border: ${Math.random()}px solid white;

    &:focus,
    &:hover {
        padding: 1em;
    }

    .otherClass {
        margin: 0;
    }

    ${Icon} {
        color: black;
    }
`;


function App () {
    return (
        <div class={app}>
          <h1 >Hello World!!!</h1>
          <div className={style.header}>111-111-12</div>

          {
              // <Title />          
          }
          <Button>44</Button>
          <Icon>ssss</Icon>
        </div>        
    );
}

export default App;