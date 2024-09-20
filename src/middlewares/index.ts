import { t, onSnapshot, addMiddleware } from "mobx-state-tree"


// admit to use redux-way using under mobx, but the size is larger


// const store = SomeStore.create()
// const disposer = addMiddleware(store, (call, next, abort) => {
//     console.log(`action ${call.name} was invoked`)
//     // runs the next middleware
//     // or the implementation of the targeted action
//     // if there is no middleware left to run

//     // the value returned from the next can be manipulated
//     next(call, (value) => value + 1)
// })