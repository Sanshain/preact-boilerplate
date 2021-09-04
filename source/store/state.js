import { createStore, update } from 'nanostores'

export const counter = createStore(() => {
	counter.set(0)
})

// export const users = createStore(() => {
// 	users.set([])
// });

// export function addUser(user) {
// 	update(users, current => [...current, user])
// }