//@ts-check

// import { h } from 'preact';
import { Router, Route, Switch } from 'wouter';
// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './header';

// Code-splitting is automated for `routes` directory

import Home from '../routes/home';
import Profile from '../routes/profile';


import Observable from "../store/index";


const App = () => {

	return <div id="app">
		
		<Header />
			
		<Switch>
			
			<Route path="/" component={Home} />
			<Route path="/profile" component={() => <Profile user={"me"} />} />
			<Route path="/profile/:user" component={() => <Profile />} />						

		</Switch>

	</div>
}

export default App;
// export default Observable(App);
