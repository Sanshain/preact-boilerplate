import { GlobalStore, ReducerStateType, RootAction } from "source/redux";


type ActionState = { type: RootAction, value: ReducerStateType };


export const middlewareLogger = (store: GlobalStore) => (next: (a: ActionState) => ActionState) => (action: ActionState) => {
        
    console.log('before', action)
    console.log('state', store.getState())    

    // @ e.g we can check auth token:
    if (true) { 
        let result = next(action);         
        console.log('after', result);
    }
}