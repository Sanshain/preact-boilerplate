import style from './style.module.css'

import { countAtom } from './store';
import { useAtom } from 'jotai'
import { Title } from './components/Title';



function App() {
    
    const [count, setCount] = useAtom(countAtom)

    return (
        <div class={style.title}>
            <h1>Hello World!!!</h1>
            <Title />
            <div className={style.header}>111-111-122</div>
            <button onClick={e => setCount(c => c + 1)}>Increase</button>
        </div>
    );
}

export default App;