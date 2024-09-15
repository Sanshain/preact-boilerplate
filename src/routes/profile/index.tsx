//@ts-check

/// react aliases:

import React, { useEffect, useState } from "react";
// import { h } from 'preact';
// import { useEffect, useState } from "preact/hooks";


/// state manager:

import { useStore } from '@nanostores/react';
import { countStore as countState } from '../../store';



/// css modules:

import style from './style.css';



// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: {user?: 'me'}) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const globalCount = useStore(countState.value);

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
				<button onClick={() => { setCount((count) => count + 1), countState.increment(globalCount)}}>Click Me</button>
				{' '}
				Clicked {count} times.
				<br />
				<hr />
				Total clicked {globalCount} times
			</p>
			
		</div>
	);
}

export default Profile;