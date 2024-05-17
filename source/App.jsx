//@ts-check

/**
 * required for correct typings:
 */
// import React from 'react';

/**
 * differences with react:
 */
import { h } from 'preact'

import { Fragment } from 'preact/compat'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStore, initStore } from "./store/source/store";
import Button from "./button";



setup(h);


const BtnClassName = css`
  background-color: lightgray;
`;


const Title = styled('h1')`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.color};
`;


const LargeTitle = styled(Title)`
  font-size: 2rem;
  color: brown;
  font-family: Verdana;
`;



const App = props => {

	const [message, setMessage] = useState('App component')	

	//@ts-ignore
	// const [count, setCount] = x.useState('count')

	const [count, setCount] = useStore('count');

	// const { dispatch, count } = useStoreon('count')	

	return <>
		<header />
		<main className={BtnClassName}>
			<LargeTitle className='title'>{message}</LargeTitle>			
			<button onClick={(e) => setCount(count + 1)}>
				add {count}
			</button>
		</main>
		<Button />		
		<Title color={count >= 0 ? 'green' : 'red'}>color status</Title>
	</>
}

export default App
