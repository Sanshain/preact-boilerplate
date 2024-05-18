//@ts-check


import { h, render } from 'preact'

// import App from './App'
// import App from "./components/app";
import App from './App.typed'

// import { initStore } from "./store/source/store";	// ~8kb min
// // import "./global.css"


// const xStore = initStore({
// 	count: 10
// })

// xStore.useStore('count', 8)


render(
	<App/>,	
	document.getElementById('root')
)
