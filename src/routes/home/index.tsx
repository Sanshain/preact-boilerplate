//@ts-check

import { h } from 'preact';
import { useRef } from 'preact/hooks';


/// cssmodules

import style from './style.css';


/// goober

import { Button } from "../../components/Button.jsx";


/// linaria

import Footer from '../../components/Footer.jsx'; 
import { a } from '../../store/store';



// import { storeHandler as userStore, users$ } from '../../store/store';
// import { useStore } from '@nanostores/react';




const Home = () => {
	
	// const users = useStore(users$);
	const inputRef = useRef(null);

	// const addUser = (e) => {
	// 	const value = inputRef.current['value'];
	// 	if (value.length) {
	// 		userStore.appendUser(value);
	// 		inputRef.current['value'] = ''	
	// 	}
	// };


	return <div class={style.home}>

		<h1>Home!!33?11d3{a}</h1>
		<p>This is the Home component.</p>

		{/* <input ref={inputRef} placeholder='enter user name' />
		<button onClick={addUser}>add</button> ({users.length}) */}
		
        <Button>ckick me</Button>

        <Footer>
            <a href={"https://github.com/Sanshain/preact-boilerplate"} target={"_blank"}>Sanshain's templates</a>
        </Footer>
        
	</div>
};

export default Home;