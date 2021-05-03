import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStoreon } from 'storeon/react' // or storeon/preact


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
	const { dispatch, count } = useStoreon('count')

	return <>
		<header />
		<main class={BtnClassName}>
			<h1 class='title'>{message}</h1>
			<button onClick={() => store.dispatch('inc')}>{count}</button>
		</main>
		<Title>789</Title>
	</>
}

export default App
