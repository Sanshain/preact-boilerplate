import style from './style.module.css'

import Title from "./components/Title";
import { state } from './store';


function App() {
    

    return (
        <div>
            <div class={style.title}>
                <h1>Hello World!!!</h1>
                <div className={style.header}>111-111-122</div>
            </div>
            <Title />
            <button onClick={() => state.count++}>increment</button>
        </div>
    );
}

export default App;