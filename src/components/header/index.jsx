//@ts-check

import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState } from 'preact/hooks'
import style from './style.css';
// import './style.css';

// let r = '5'


const Header = (/** @type {{}} */ props) => {

	const [ name ] = useState('cls');

	// console.log(style.header);

	return <header class={style.header}>
		<h1>Preact App</h1>
		<nav>			
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
}

export default Header;
