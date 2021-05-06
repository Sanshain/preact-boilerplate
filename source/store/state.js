import { createStoreon } from 'storeon'

// Initial state, reducers and business logic are packed in independent modules
let count = store => {

	let hooks = [];

	// Initial state
	store.on('@init', () => ({ count: 0 }))
	// Reducers returns only changed part of the state	
	store.on('inc', ({ count }, event) => {
		
		// console.log(count);
		return ({ count: count + 1 })
	})
	store.on('set', (state, useInfo) => {

		let [data, callback] = [...useInfo];
		if (!~hooks.indexOf(callback)) hooks.push(callback);		
		for (const hook of hooks) hook(data)
						
		return state = {count: data}
	})

}

export const store = createStoreon([count])