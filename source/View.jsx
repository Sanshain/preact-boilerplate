//@ts-check

import { h, Fragment } from 'preact'
import { useStore } from "nanostores/preact"
import { counter } from './store/state'

const View = props => {	

	const count = useStore(counter)
	// const [count, setCount] = useState(store.get().count)	
	
	return <>
		<div>{count + 1} - count</div>
	</>
}

export default View