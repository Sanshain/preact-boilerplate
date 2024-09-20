//@ts-check

// import { makeAutoObservable } from "mobx"


export const createAppStore = (props) => {
    return {
        // test: props.test || 'Hello world',
        // toggleTest: function () {
        //     this.test = this.test === 'Hi!' ? 'How are you?' : 'Hi!';
        // },
        secondsPassed: props || 0,
        increase() {
            this.secondsPassed += 1
        },
        reset() {
            this.secondsPassed = 0
        }
    };
};