//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "../store/source/store";


import style from "../style.module.css"





const Button = props => {

	const [text] = useState('minus')
	
	const [count, setCount] = useStore('count', 0);

	// const { dispatch, count } = useStoreon('count')


	return <>
		<hr/>
		<div class={style.title}>
			<h2>Button component</h2>
			<button onClick={e => setCount(count - 1)}>{text} ({count})</button>
		</div>
	</>
}

export default Button