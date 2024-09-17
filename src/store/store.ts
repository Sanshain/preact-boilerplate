import { action, atom } from '@reatom/core'

export const numberAtom = atom(0);

/// @ computed analogue:
export const titleAtom = atom((ctx) => `Total counts: ${ctx.spy(numberAtom)}!`)


export const onChangeNumber = action((ctx, event) =>
    // изменить примитивный атом можно вызвав его как функцию
    numberAtom(ctx, event.currentTarget.value),
)

