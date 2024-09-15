import { useEffect } from "preact/hooks";

// import { useAtom } from 'jotai';
// import Title from './components/Title';

// import { countAtom } from './store/index';
import style from './style.module.css'


const a: string = 'aaa';


function App() {
    
    // const [count, setCount] = useAtom(countAtom)

    useEffect(() => console.log('effect'), []);

    return (
        <div class={style.title}>
            <h1>Hello World, {a}!!</h1>
            {/* <Title /> */}
            <div className={style.header}>111-111-122</div>
            {/* <button onClick={e => setCount(v => v + 1)}>increase</button> */}
        </div>
    );
}

export default App;