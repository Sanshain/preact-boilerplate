//@ts-check

import { h } from 'preact';
import { Router, Route } from 'preact-router';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';


const App = () => {

	const handleRoute = async e => {
		
		switch (e.url) {
			case '/profile':
				// const isAuthed = await this.isAuthenticated();
				// if (!isAuthed) route('/', true);
				// break;				
		}
		console.log(e.url)
	};
	
	return <div id="app">
		<Header />
		<Router onChange={handleRoute}>
			{/* <Home path="/" /> */}
			<Route path="/" component={Home} />
			<Route path="/profile" component={Profile} user="me" />
			<Route path="/profile/:user" component={Profile} />
			{/* <Profile path="/profile/" user="me" /> */}
			{/* <Profile path="/profile/:user" /> */}
		</Router>
	</div>
}

export default App;
