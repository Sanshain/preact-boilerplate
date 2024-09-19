import { useSnapshot } from "valtio";
import { state } from "../store";

export default function Title() {    

    const snap = useSnapshot(state)

    return <h3>
        There are {snap.count} counts
    </h3>
}