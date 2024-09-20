//@ts-check

import { makeAutoObservable } from "mobx"


export const createTimer = () => makeAutoObservable({
    secondsPassed: 0,
    increase() {
        this.secondsPassed += 1
    },
    reset() {
        this.secondsPassed = 0
    }
})

export type StoreType = ReturnType<typeof createTimer>