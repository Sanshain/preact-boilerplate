import { reatomAsync, withAbort, withDataAtom, withRetry, onUpdate, sleep, withCache } from "@reatom/framework"; // prettier-ignore

import { action, atom } from '@reatom/core'


console.log(reatomAsync, withAbort, withDataAtom, withRetry, onUpdate, sleep, withCache)

export const numberAtom = atom(0, 'name:countStore')

export const titleAtom = atom((ctx) => `Total counts ${ctx.spy(numberAtom)}!`)

export const onChange = action((ctx, event) => {

   console.log(ctx.cause);
   numberAtom(ctx, event.currentTarget.value);         // you can change a primitive atom by calling it as a function
});

