//@ts-check

import { h } from 'preact';
import style from './style.css';
// import { storeHandler as userStore, users$ } from '../../store/store';
// import { useStore } from '@nanostores/react';
import { useRef } from 'preact/hooks';
// import './style.css';

const Home = () => {
	
	// const users = useStore(users$);
	const inputRef = useRef(null);

	// const addUser = (e) => {
	// 	const value = inputRef.current['value'];
	// 	if (value.length) {
	// 		userStore.appendUser(value);
	// 		inputRef.current['value'] = ''	
	// 	}
	// 	else {
	// 		alert('too short!')
	// 	}

	// };


	return <div class={style.home}>

		<h1>Home</h1>
		<p>This is the Home component.</p>

		{/* <input ref={inputRef} placeholder='enter user name' />
		<button onClick={addUser}>add</button> ({users.length}) */}
			
	</div>
};

export default Home;