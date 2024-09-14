//@ts-check

import { h } from 'preact';
import { Router, Route } from 'preact-router';

import Header from './Header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/Home';
import Profile from '../routes/Profile';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			{/* <Home path="/" /> */}			
			<Route path="/" component={Home} />
			<Route path="/profile" component={Profile} user="me" />
			<Route path="/profile/:user" component={Profile} />
			{/* <Profile path="/profile/" user="me" /> */}
			{/* <Profile path="/profile/:user" /> */}
		</Router>
	</div>
)

export default App;
