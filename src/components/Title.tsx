import { useAtom } from 'jotai';
import { countAtom } from '../store';

export function Title() {

    const [count, setCount] = useAtom(countAtom)

    return <h3 style={{color: 'brown'}}>
        Total counts is {count}
    </h3>
}