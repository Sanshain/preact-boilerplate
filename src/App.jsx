import style from './style.module.css'

import { useEffect } from "preact/hooks";

function App() {
    
    useEffect(() => console.log('effect'), [])

    return (
        <div class={style.title}>
            <h1>Hello World!!!</h1>
            <div className={style.header}>111-111-122</div>
        </div>
    );
}

export default App;