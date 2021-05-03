import './style.css'

import { h, render } from 'preact'
import App from './App'

import { StoreContext } from 'storeon/react'
import { store } from "./store/state";
// import App from "./components/app";
// import App from './TSApp'

render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>, 
	document.getElementById('root')
)

// render(<App/>, document.getElementById('root'))