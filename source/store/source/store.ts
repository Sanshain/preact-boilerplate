//@ts-check

// @ts-ignore
// import { useState } from 'react/hooks'

// import { useState } from 'preact/hooks'
import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react';


// SetStateAction (react) | StateUpdater (preact) 

interface IStateHandler<T> {
	hooks: Dispatch<SetStateAction<T>>[],
	initState: T
}



let globaState: typeof useState | null = null;

// let states: Record<string, { hooks: Dispatch<SetStateAction<unknown>>[], initState: unknown }> = {};
let states: Record<string, IStateHandler<unknown>> = {};

/**
 * @param {string | number} key
 * @param {any} value
 */
export function setState<T>(key: string, value: T){

	for (const hook of states[key].hooks) {
		
		// console.log(hook);
		hook(value)
	}
}

// export const useStateStore = (us) => (key, initValue) => useStore(key, initValue, us)

/**
 * @param {Function} _useState
 */
export function useStateStore(_useState: typeof useState)
{
	return function(key: string, init_value: unknown)
	{
		return useStore(key, init_value, _useState)
	}
}

/**
 * @param {string} key
 * @param {any} init_value
 */
export function useStore(key: string, init_value: unknown, uState?: typeof useState){

	const [value, setValue] = (uState || globaState || useState)(
		init_value !== undefined ? init_value : (states[key] || {}).initState
	)

	if (key in states){
		
		!~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
	}
	else states[key] =  {
		hooks: [setValue],
		initState: init_value
	}
	
	return [value, setState.bind(null, key)]
}


/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
export function initStore<T extends { [x: string]: any; }>(init_dict: T, _useState?: typeof useState): XStore<T> {

	for (const key in init_dict) {
		states[key] = {
			hooks: [],
			initState: init_dict[key]			
		}
	}

	globaState = _useState || null;

	return {
		$info: init_dict,
		useStore: useStore as XStore<T>['useStore'],
	}
}


type XStore<T extends object> = {
	$info: T,
	useStore<K extends keyof T>(key: K, v: T[K]): [T[K], Dispatch<SetStateAction<T[K]>>]
}