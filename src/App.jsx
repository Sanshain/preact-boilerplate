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
import { Button } from './components/Button.jsx';


/// ADDITIONAL LINARIA OPPORTUNITIES:

// import { modularScale, hiDPI } from 'polished';

// font - size: ${ modularScale(2) };
//   ${ hiDPI(1.5) } {
//   font - size: ${ modularScale(2.5) };
// }




function App () {
    return (
        <div class={'app'} style={{backgroundColor: 'aliceblue'}}>
            <h1>Hello World!!!</h1>
            <div className={style.content}>some content colored from css modules</div>

        {/* <Title /> */}
        
            <Button>click me</Button>
        
            <Footer>linaria</Footer>
        </div>        
    );
}

export default App;