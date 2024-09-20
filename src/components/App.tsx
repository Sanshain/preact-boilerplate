//@ts-check

import { h } from 'preact';
import { Router, Route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { useStore } from '@nanostores/preact';
import { createRouter } from '@nanostores/router'




// const routersMatcher = {
// 	home: p => <Home />,
// 	profile: p => <Profile user={'me'} />,
// 	profile__user: p => <Profile user={p} />,
// } 

// Object.fromEntries(Object.keys(routersMatcher).map(k => [k, k]))

const routes = {
	home: '/',
	profile: '/profile',
	profile__user: '/profile/:user'
}

type Routes = { [K in keyof typeof routes]: any }


export const $router = createRouter(routes)

export const Layout = () => {
    
    const page = useStore($router)

    return ({
		home: p => <Home />,
		profile: p => <Profile user={'me'} />,
		profile__user: p => <Profile user={p} />,		
	} as Routes)[page.route](page)

    // return routes[page.route](page);
}



const App = () => (
	<div id="app">
		<Header />
		<Layout />
		{/* <Router>			
			<Route path="/" component={Home} />
			<Route path="/profile" component={Profile} user="me" />
			<Route path="/profile/:user" component={Profile} />						
		</Router> */}
	</div>
)

export default App;
