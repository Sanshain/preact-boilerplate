//@ts-check

// import { h } from 'preact';
import { createElement } from 'react';

import { Link } from 'preact-router/match';
// import { Link } from "react-router-dom";


import { useState } from 'react'
import style from './style.css';
// import './style.css';

// let r = '5'

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
			<Link activeClassName='active' href="/">Home</Link>
			<Link activeClassName='active' href="/profile">Me</Link>
			<Link activeClassName='active' href="/profile/john">John</Link>

			{/* <Link to="/">Home</Link>
			<Link to="/profile">Me</Link>
			<Link to="/profile/john">John</Link>			 */}
		</nav>
	</header>
}

export default Header;
