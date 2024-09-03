import style from './style.module.css'
import { styled, setup } from 'goober';



const Icon = styled('span')`    
    color: red;
`;

const Button = styled('button')`
    background: dodgerblue;
    color: white;
    transition: .2s;
    margin: 1em 0;
    /* border: ${Math.random()}px solid white; */

    &:focus,
    &:hover {
        padding: 1em;
    }

    .otherClass {
        margin: 0;
    }

    ${Icon} {        
        text-shadow: 0 0 5px white;
    }
`;


function App () {
    return (
        <div class={style.title}>
            <h1>Hello World!!!</h1>
            <div className={style.header}>111-111-122</div>
            <Button>click <Icon>me</Icon></Button>
        </div>
    );
}

export default App;