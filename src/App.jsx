//@ts-check


/// HOT CSS:

// import './App.css';
import './style.css'


/// LINARIA: (works with goober just via importing final component from separated file)

// till just with css:
import { css } from '@linaria/core';
import Footer from './components/Footer'; 

// import { default as Title } from "./components/Title";   // styled attempts


/// GOOBER: 

import { styled } from 'goober';


/// ADDITIONAL LINARIA OPPORTUNITIES:

// import { modularScale, hiDPI } from 'polished';

// font - size: ${ modularScale(2) };
//   ${ hiDPI(1.5) } {
//   font - size: ${ modularScale(2.5) };
// }



const fonts = Object.freeze({
  heading: 'monospace'
});


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
        <div class={'app'}>
            <h1>Hello World!!!</h1>
            <div className="header">111-111-12</div>

            {/* <Title /> */}
        
            <Footer>123</Footer>
        </div>        
    );
}

export default App;