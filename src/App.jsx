//@ts-check

//@ts-expect-error
import style from './style.module.css'

import Title from "./components/Title";

import { useCountStore } from "./store/index";

import { useEffect } from "preact/hooks";



function App() {

    useEffect(() => console.log('effect'), []);

    const increase = useCountStore((state) => state.increase)

    return (
        <div>
            <div class={style.title}>
                <h1>Hello World!!!</h1>
                <div className={style.header}>111-111-122</div>
            </div>
            <Title />
            <button onClick={increase}>increment</button>
        </div>
    );
}

export default App;