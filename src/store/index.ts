import {
    createEvent,
    createStore,
    // sample
} from 'effector';

export const $counter = createStore<number>(0, {
    /**
     * @description filter function (takes old and new values and return boolean). works like simplified redux middleware
     */
    updateFilter(curr, prev) {
        if (prev >= 15) {
            return false;
        }
        return prev < curr;
    }
});


export const update = createEvent<number>();

$counter.on(update, (state, payload) => {
    return state + payload;
})

