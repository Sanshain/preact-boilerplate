import { useCountStore } from "../store/index";

export default function Title() {

    const value = useCountStore((state) => state.value)

    return <h3>
        There are {value} counts
    </h3>
}