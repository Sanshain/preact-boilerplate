//@ts-check

// import './App.css';
// import './style.css';

import style from './style.css';



// till just with css:
import { css } from '@linaria/core';
import type { LinariaClassName } from "@linaria/core/types"



// 


// import { default as Title } from "./components/Title";


// import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';


const title: LinariaClassName = css`
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

function App() {

  const link = "https://github.com/Sanshain/preact-boilerplate";

  return (
    <div style={{ backgroundColor: 'aliceblue' }}>
      <h1 class={title}>Hello World!!!</h1>
      <p className={style.content}>
        <span>Welcome to </span>
        <a style={{ color: 'green' }} target={"_blank"} href={link}>Sanshain's preact boilerplates</a>
      </p>

      {/* <Title user={"Sasha"} /> */}
    </div>
  );
}

export default App;