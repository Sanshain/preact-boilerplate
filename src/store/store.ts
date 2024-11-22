import {
    atom as createStore,                    // for numbers, boolean, strings, arrays and sealed(!) objects
    map as createMapStore,                  // for extensible objects
    onSet,
} from 'nanostores';



export const userScores$ = {

    value: createStore<Record<string, number> & {me: number}>({
        me: 0,
        john: 0
    }),
    
    setScore(user: string, score: number) {
        
        userScores$.value.set({ ...userScores$.value.get(), [user]: score });
        
        // console.log(userScores$.value.get())
    },

    reset() {

        userScores$.value.set({me: 0})
    },

    [Symbol('static constructor')]: setTimeout(() => {
        
        onSet(userScores$.value, ({ newValue, abort }) => {
            
            console.log(newValue.me)

            if (newValue.me > 15) {
                abort()
            }
            else if (newValue.me > 4) {                
                newValue.me *= 2;
            }
        })        

    })

} as const




export const isFriends$ = {

    value: createStore<boolean>(false),

    set: (v: boolean) => isFriends$.value.set(v)
}

