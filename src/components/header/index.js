//@ts-check

import { h } from 'preact';
// import { Link } from 'preact-router/match';
import { useState } from 'preact/hooks'
import style from './style.css';
// import './style.css';

// let r = '5'

const Header = props => {

	const [ name ] = useState('cls');

	// console.log(style.header);

	return <header class={style.header}>
		<h1>Preact App</h1>
		<nav>			
			<a href="/">Home</a>
			<a href="/profile">Me</a>
			<a href="/profile/john">John</a>
		</nav>
	</header>
}

export default Header;
