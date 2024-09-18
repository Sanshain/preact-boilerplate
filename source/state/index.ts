import { action, atom } from '@reatom/core'

export const numberAtom = atom(0)

export const titleAtom = atom((ctx) => `Total counts ${ctx.spy(numberAtom)}!`)

export const onChange = action((ctx, event) => {

   console.log(ctx.cause);
   numberAtom(ctx, event.currentTarget.value);         // you can change a primitive atom by calling it as a function
});

