//@ts-check

import { h } from 'preact';
// import React, { render } from 'react'
import { render } from 'preact'

// import App from './App'
// import App from "./components/app";
import App from './App.typed'

import { Provider } from 'react-redux'
import { store } from './redux/index'

// import { initStore } from "./store/source/store";	// ~8kb min
// // import "./global.css"


// const xStore = initStore({
// 	count: 10
// })

// xStore.useStore('count', 8)


render(
	<Provider store={store}>
		<App nameTitle='Welcome to Microsite!!'> </App>
	</Provider>,
	// <App />,
	document.getElementById('root')
)
