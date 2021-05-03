import { createStoreon } from 'storeon'

// Initial state, reducers and business logic are packed in independent modules
let count = store => {
	// Initial state
	store.on('@init', () => ({ count: 0 }))
	// Reducers returns only changed part of the state	
	store.on('inc', ({ count }) => {
		console.log(count);
		return ({ count: count + 1 })
	})
	store.on('set', (state, event) => ({ counter: event }))

}

export const store = createStoreon([count])