//@ts-check


/// HOT CSS:

// import './App.css';
import style from './style.css'


/// LINARIA: (works with goober just via importing final component from separated file)

// till just with css:
import { css } from '@linaria/core';
import Footer from './components/Footer'; 

// import { default as Title } from "./components/Title";   // styled attempts


/// GOOBER: 

import { styled } from 'goober';
import { Button } from './components/Button';


/// ADDITIONAL LINARIA OPPORTUNITIES:

// import { modularScale, hiDPI } from 'polished';

// font - size: ${ modularScale(2) };
//   ${ hiDPI(1.5) } {
//   font - size: ${ modularScale(2.5) };
// }




function App () {
    return (
        <div class={'app'}>
            <h1>Hello World!!!</h1>
            <div className={style.content}>some content</div>

        {/* <Title /> */}
        
            <Button>click me</Button>
        
            <Footer>123</Footer>
        </div>        
    );
}

export default App;