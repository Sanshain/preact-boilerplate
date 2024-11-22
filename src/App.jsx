//@ts-check


/// HOT CSS and CSS MODULES:


import style from './style.css'


/// LINARIA: (works with goober just via importing final component from separated file)


import { css } from '@linaria/core';    // till just with css:
import Footer from './components/Footer'; 
// import { default as Title } from "./components/Title";   // styled attempts


/// GOOBER: 

import { styled } from 'goober';
import { Button } from './components/Button';







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