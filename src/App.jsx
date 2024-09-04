//@ts-check

// import './App.css';
// import './style.css';





/// CSS MODULES:


import style from './style.css';



/// GOOBER:

import { styled } from "goober";
import { default as Button } from "./components/Button";     




/// LINARIA:

// import { css } from '@linaria/core';    // till just with css:
import Title from "./components/Title"



/// OPTIONAL FEATURES FOR LINARIA SAMPLE:


import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';





const Container = styled('div')`  
  color: ${props => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }
`;



// const fonts = {
//   heading: '12px'
// }


// const app = css`
//   text-transform: uppercase;
//   color: red;
//   color: green;

//   /* comments inside css tag doesn't work: */

//   font-family: ${fonts.heading};
//   font-size: ${modularScale(1.5)};
//   /* ${hiDPI(1.5)} {
//     font-size: ${modularScale(2.5)};
//   }   */

//   &:hover{
//     color: red;
//   }
// `;




function App () {
  return (
      <div>
        <Title />
        <div class={'app'}>
          <h1 >Hello World!!</h1>
          <div className={style.header}>111-111-12</div>

          {/* <Button>44</Button>
            <Icon>ssss</Icon> */}
          <Container>Container</Container>
          <Button>44</Button>
        </div>              
      </div>

    );
}

export default App;