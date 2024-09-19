import { create } from 'zustand'

type CountStore = {
    count: number,
    increase: () => void,
    reset: () => void,
}

export const useCountStore = create<CountStore>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set({ count: 0 }),
}))