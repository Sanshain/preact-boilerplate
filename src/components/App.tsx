//@ts-check

import { h } from 'preact';
import { Router, Route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { useStore } from '@nanostores/preact';
import { createRouter } from '@nanostores/router'


type Routes = { [K in string]: (p: { params: Record<string, string> }) => h.JSX.Element }

// type Routes = { [K in string]: (p: { params: Record<K extends `${string}:${infer P extends string}` ? P : never, string> }) => h.JSX.Element }
// type Routes = { [K in string]: (p: { params: K extends `${string}:${infer P extends string}` ? Record<P, string> : never }) => h.JSX.Element }
// type O = '/profile/:user' extends `${string}:${infer P extends string}` ? P : never

// const routersMatcher: { [K in string]: (p: { params: Record<string, string> }) => h.JSX.Element } = {

const routersMatcher: Routes = {
	'/': p => <Home />,
	'/profile': p => <Profile user={'me'} />,
	'/profile/:user': p => <Profile user={p.params.user} />,
} 


// type Routes = { [K in keyof typeof routersMatcher]: K }


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
