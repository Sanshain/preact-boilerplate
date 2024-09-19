import { create } from 'zustand'

type CountStore = {
    count: number,
    increase: () => void,
    reset: () => void,                  // <= THAT'S A TROUBLE. i SHOULT TO SPECIFY ALL TYPES OF ACTIONS EVERYWERE INSTEAD OF AUTOWITHDRAWAL
}

export const useCountStore = create<CountStore>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set({ count: 0 }),     // <= THAT'S A TROUBLE. i SHOULT TO SPECIFY ALL TYPES OF ACTIONS EVERYWERE INSTEAD OF AUTOWITHDRAWAL
}))





const types = { increase: 'INCREASE', decrease: 'DECREASE' }
type Action = { type: typeof types[keyof typeof types], by: number }
// type Actions = 'increase' | 'decrease'

type GrumpyStore = {
    grumpiness: number,
    dispatch: (args: Action) => void    // <= THAT'S A TROUBLE. i SHOULT TO SPECIFY ALL TYPES OF ACTIONS EVERYWERE INSTEAD OF AUTOWITHDRAWAL
}

const reducer = (state: GrumpyStore, { type, by = 1 }: Action) => {
    switch (type) {
        case types.increase:
            return { grumpiness: state.grumpiness + by }
        case types.decrease:
            return { grumpiness: state.grumpiness - by }
    }
}

const useGrumpyStore = create<GrumpyStore>((set) => ({
    grumpiness: 0,
    //@ts-ignore
    dispatch: (args) => set((state) => reducer(state, args)),
}))

const dispatch = useGrumpyStore((state) => state.dispatch)
dispatch({ type: types.increase, by: 2 })