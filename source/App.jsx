//@ts-check
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { counter } from './store/state'
import { update } from 'nanostores'
import { useStore } from 'nanostores/preact'

//@ts-ignore
import style from "./style.css";
import View from "./View";

setup(h);

const Title = styled("h1")`
  text-align: center;
  color: red;
`;

const BtnClassName = css`
  background-color: lightgray;
`;

const App = props => {

	const [message] = useState('Preact App')

	const count = useStore(counter)
	// const [count, setCount] = useState(store.get().count)

	// const { dispatch, count } = useStoreon('count')


	return <>
		<header className='header' />
		<main className={BtnClassName}>
			<h1 className={style.title}>{message}</h1>
			<button onClick={(e) => update(counter, value => value + 1)}>
				{count}
			</button>
			<View>cnt</View>
		</main>		
		<Title>789</Title>
	</>
}

export default App
