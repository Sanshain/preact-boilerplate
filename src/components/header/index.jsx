//@ts-check

// import { h } from 'preact';
import { createElement } from 'react';

import { Link } from 'wouter';



import { useState } from 'react'
import style from './style.css';


const linkStyle = {
	className: (active) => (active ? style.active : "")
}

const Header = props => {

	// const location = useLocation();

	// useEffect(() => {
	// 	console.log('Current location is ', location);
	// }, [location]);		

	const [ name ] = useState('cls');

	// console.log(style.header);

	return <header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link {...linkStyle} href="/">Home</Link>
			<Link {...linkStyle} href="/profile">Me</Link>
			<Link {...linkStyle} href="/profile/john">John</Link>

		</nav>
	</header>
}

export default Header;
