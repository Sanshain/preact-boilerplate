
// //@ts-check

import { useState } from 'react/hooks'


let hooks = [];

export function setState(value){

	for (const hook of hooks) {
		
		console.log(hook);
		hook(value)
	}
}

export function useStore(initvalue){

	const [value, setValue] = useState(initvalue)
	if (!~hooks.indexOf(setValue)) {
		
		hooks.push(setValue);
	}
	return [value, setState]
}


