import { useAtom } from 'jotai'
import { countAtom } from '../store/index'


export default function Title() {

    const [count, setCount] = useAtom(countAtom)

    return <h3>
        Total counts {count}
    </h3>
}