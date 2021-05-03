import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStoreon } from 'storeon/preact' // or storeon/preact

import { store } from "./store/state";

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
	// const [message] = useState('Preact App')

	const setState = data => e.target.innerText = data;
	// const { dispatch, count } = useStoreon('count')


	return <>
		<header />
		<main class={BtnClassName}>
			<h1 class='title'>{message}</h1>
			<button onClick={(e) => store.dispatch('set', [store.get().count+1, setState] )}>
				{store.get().count}
			</button>
		</main>
		<Title>789</Title>
	</>
}

export default App
