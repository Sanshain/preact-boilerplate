// import { h } from "preact";
import { styled } from 'goober';


import './App.css';
import './style.css'


const Button = styled('button')`
    background: dodgerblue;
    color: white;  
    transition: 0.1s;
    margin: 1em 0;

    &:focus,
    &:hover {
        padding: 1em;
    }

    .otherClass {
        margin: 0;
    }
`;

const Icon = styled('span')`
    /* display: flex;
    flex: 1; */
    color: red;
`;




function App () {
    return (
        <div class="App">
            <h1>Hello World!!</h1>
            <div className="header">111-111-12</div>
            <Button onClick={() => alert(99)}>
                click <Icon>me</Icon>
            </Button>
        </div>
    );
}

export default App;