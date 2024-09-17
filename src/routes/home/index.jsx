//@ts-check


/// react aliases

import React, { useRef } from 'react';


/// cssmodules

import style from './style.css';


/// goober

import { Button } from "../../components/Button";


/// linaria

import Footer from '../../components/Footer'; 


/// nanostores


// import { storeHandler as userStore, users$ } from '../../store/store';
// import { useStore } from '@nanostores/react';

import { useAtom } from "@reatom/npm-react";	
import { numberAtom } from "../../store/store";


const Home = () => {
	
	// const users = useStore(users$);
	// const inputRef = useRef(null);

	const [ globalCount, ] = useAtom(numberAtom)

	return <div className={style.home}>

		<h1>Home</h1>
		<p>This is the Home component.</p>

		<p>Total clicked {globalCount}</p>

		{/* <input ref={inputRef} placeholder='enter user name' />
		<button onClick={addUser}>add</button> ({users.length}) */}
		
        <Button>ckick me</Button>

        <Footer>
            <a href={"https://github.com/Sanshain/preact-boilerplate"} target={"_blank"}>Sanshain's templates</a>
        </Footer>
        
	</div>
};

export default Home;