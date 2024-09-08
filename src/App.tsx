//@ts-check

// import './App.css';
// import './style.css';

// import style from './style.css';



// till just with css:
import { css } from '@linaria/core';
// import type { LinariaClassName } from "@linaria/core/types"



// 


// import { default as Title } from "./components/Title";


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

function App () {
    return (
        <div class={app}>
          <h1>Hello World!!!</h1>
          <div className={'style.header'}>111-111-12</div>

          {/* <Title user={"Sasha"} /> */}
        </div>        
    );
}

export default App;