import {
	reatomAsync,
	// withAbort,
	// withDataAtom,
	// withRetry,
	onUpdate,
	// sleep,
	withCache
} from "@reatom/framework"; // prettier-ignore

import { action, atom } from '@reatom/core'


// console.log(reatomAsync, withAbort, withDataAtom, withRetry, onUpdate, sleep, withCache)
console.log(reatomAsync, onUpdate, withCache)

export const numberAtom = atom(0, 'name:countStore')

export const titleAtom = atom((ctx) => `Total counts ${ctx.spy(numberAtom)}!`)

export const onChange = action((ctx, event) => {

	console.log(ctx.cause);
	numberAtom(ctx, event.currentTarget.value);         // you can change a primitive atom by calling it as a function
});



/**
Можно лишь отметить, что любителям ФРП стоит обратить внимание на пакет @reatom/lens, а сторонникам более классической архитектуры — 
взглянуть на пакет @reatom/hooks, который позволяет писать более изолированный код, приближенный к акторам.

Ах да, и про реактивный кеш. Пакет @reatom/async в связке с базовыми фичами реатома даёт большую часть фич react-query, 
а какие-то даже превосходит, всего за пару килобайт. 
 */