import { atom as createStore } from 'nanostores'


export const countStore = {
    value: createStore<number>(10),
    increment: (v) => countStore.value.set(v + 1),
    decrement: (v) => countStore.value.set(v - 1)
} as const

// export const globalState = {
//     count$: countStore
// }