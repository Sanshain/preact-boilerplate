// import './App.css';
import './style.css'

// till just with css:
import { css } from '@linaria/core';
// import { default as Title } from "./components/Title";

// import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';


const app = css`
  text-transform: uppercase;
  color: red;
  /* color: blue; */
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
            <div className="header">111-111-12</div>

            {/* <Title /> */}
        </div>        
    );
}

export default App;