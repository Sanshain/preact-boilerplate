import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";


const [countObserver, setCount] = createSignal<number>();

const [useCountStore, observableCount] = bind(countObserver, 0);


export {
    setCount,
    observableCount,
    useCountStore
}