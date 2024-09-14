import { createStoreon, StoreonModule } from 'storeon'


// import { projects } from './projects'
// import { users } from './users'


const score: StoreonModule<{ scores: number[] }, {'score/add': number}> = function(store) {
    store.on('@init', () => ({ scores: [] }))

    store.on('score/add', ({ scores }, score) => {
        return { scores: scores.concat([score]) }
    })
}

export const store = createStoreon([score])
