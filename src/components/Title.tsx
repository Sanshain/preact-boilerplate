import { useUnit } from 'effector-react';
import { $counter } from '../store';


export default function Title() {

    const count = useUnit($counter);

    return <h3>
        Total counted {count}
    </h3>
}