//@ts-check

/// react aliases:

import React, { useEffect, useState } from "react";
// import { h } from 'preact';
// import { useEffect, useState } from "preact/hooks";


/// state manager:

// import { useStore } from '@nanostores/react';
// import { users$ } from '../../store/store';



/// css modules:

import style from './style.css';
import { useCountStore as useCountUnit, setCount as setGlobalCount } from "../../rxjs/store";



// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: {user?: 'me'}) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	// const users = useStore(users$);
	const globalCount = useCountUnit()

	useEffect(() => {		
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => { setCount((count) => count + 1); setGlobalCount(globalCount + 1) }}>Click Me</button>
				{' '}
				Clicked {count} times.
				<hr />
				<h3>Total clicked {globalCount}</h3>
			</p>
			
		</div>
	);
}

export default Profile;