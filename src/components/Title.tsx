import { state } from "../store";

export default function Title() {    

    return <h3>
        There are {state} counts
    </h3>
}