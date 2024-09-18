import { useEffect } from 'preact/hooks'

// //@ts-expect-error
// import { useEffect } from 'react';


import Title from './components/Title';
import { update } from './store';

import style from './style.module.css'


const a: string = 'aaa';

function App() {
    
    useEffect(() => console.log('effect'), []);

    return (
        <div class={style.title}>
            <h1>Hello World, {a}!!</h1>
            <div className={style.header}>111-111-122</div>
            <Title />
            <button onClick={e => update(1)}>increment</button>
        </div>
    );
}

export default App;