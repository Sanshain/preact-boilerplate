import { useAtom } from 'jotai';
import { countAtom } from '../store';

export function Title() {

    const [count, setCount] = useAtom(countAtom)

    return <h3>
        Total counts is {count}
    </h3>
}