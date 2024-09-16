//@ts-check

import React from 'react'
import { createRoot } from 'react-dom/client';

// import { h, render } from 'preact'

// import App from './App'
// import App from "./components/app";
import App from './TypedApp'

import { Provider } from 'react-redux'
import { store } from './redux/index'


// import { initStore } from "./store/source/store";	// ~8kb min
// // import "./global.css"


// const xStore = initStore({
// 	count: 10
// })

// xStore.useStore('count', 8)


const elem = document.getElementById('root');
if (elem) {
	const container = createRoot(elem)		
	container.render(
		<Provider store={store}>
			<App nameTitle='Welcome to Microsite!!'> </App>
		</Provider>,
	)
}
else {
	console.error('error')
}



// render(
// 	<Provider store={store}>
// 		<App nameTitle='Welcome to Microsite!!'> </App>
// 	</Provider>,
// 	// <App />,
// 	document.getElementById('root')
// )
