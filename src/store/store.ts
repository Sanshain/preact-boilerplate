import {
    atom as createStore,                    // for numbers, boolean, strings, arrays and sealed(!) objects
    map as createMapStore,                  // for extensible objects
} from 'nanostores';



export const userScores$ = {

    value: createStore<Record<string, number>>({
        Me: 0,
        John: 0
    }),
    
    setScore(user: string, score: number) {
        
        userScores$.value.set({ ...userScores$.value.get(), [user]: score});
    },    

} as const



export const isFriends$ = {

    value: createStore<boolean>(false),

    set: (v: boolean) => isFriends$.value.set(v)
}

