//@ts-check

// import { h } from 'preact';
import { Router, Route } from 'preact-router';
import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';


const App = () => {

	const handleRoute = async (e) => {
		
		switch (e.url) {
			case '/profile':
				// const isAuthed = await this.isAuthenticated();
				// if (!isAuthed) route('/', true);
				// break;				
		}
		console.log(e.url)
	};	


	return <div id="app">
		{/* <BrowserRouter>		 */}
		<Header />
			
		<Router onChange={handleRoute}>
			
			<Route path="/" component={Home} />
			<Route path="/profile" component={Profile} user="me" />
			<Route path="/profile/:user" component={Profile} />		
			
		</Router>

		{/* Also possible: */}

		{/* <Home path="/" />
		<Profile path="/profile/" user="me" />
		<Profile path="/profile/:user" /> */}

			{/* <Routes>
				<Route index path="/" element={<Home/>} />
				<Route path="profile" element={<Profile user="me" />} />
				<Route path="profile/:user" element={<Profile />} />
			</Routes>		 */}
		{/* </BrowserRouter> */}
	</div>
}

export default App;
