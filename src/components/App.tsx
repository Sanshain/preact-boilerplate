//@ts-check

import { h } from 'preact';
import { Router, Route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { useStore } from '@nanostores/preact';
import { createRouter } from '@nanostores/router'




const routersMatcher = {
	'/': p => <Home />,
	'/profile': p => <Profile user={'me'} />,
	'/profile/:user': p => <Profile user={p} />,
} 


type Routes = { [K in keyof typeof routersMatcher]: K }


export const $router = createRouter(
	Object.fromEntries(Object.keys(routersMatcher).map(k => [k, k])) as { [K in keyof typeof routersMatcher]: K }
)

export const Layout = () => {
    
    const page = useStore($router)

	return routersMatcher[page.route](page)
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
