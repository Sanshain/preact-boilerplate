// @ ts-check

import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";


/// @ zustand:


import { countAtom } from '../../store/store';
import { useAtom } from 'jotai/react';


/// @ css modules:

import style from './style.css';







// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {

	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [globalCount, setGlobalCount] = useAtom(countAtom);

	
	// const globalCount = useSelector.withTypes<ReturnType<typeof globalStore['getState']>>()
	// const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector

	
	// const globalCount = useSelector<GlobalState>(state => state.counter.value)
	// const dispatch = useDispatch()

	// const users = useStore(users$);

	/// @ timer:
	useEffect(() => {		
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => {
					setCount((count) => count + 1)
					// setGlobalCount(count => count + 1)
				}}>
					Increment
				</button>
				{' '}
				Clicked {count} times.
				<br />
				{/* Total clicked {globalCount} */}
			</p>
			
		</div>
	);
}

export default Profile;