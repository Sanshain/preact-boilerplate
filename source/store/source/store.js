"use strict";
//@ts-check
exports.__esModule = true;
exports.initStore = exports.useStore = exports.useStateStore = exports.setState = void 0;
// @ts-ignore
// import { useState } from 'react/hooks'
// import { useState } from 'preact/hooks'
var react_1 = require("react");
var globaState = null;
// let states: Record<string, { hooks: Dispatch<SetStateAction<unknown>>[], initState: unknown }> = {};
var states = {};
/**
 * @param {string | number} key
 * @param {any} value
 */
function setState(key, value) {
    for (var _i = 0, _a = states[key].hooks; _i < _a.length; _i++) {
        var hook = _a[_i];
        // console.log(hook);
        hook(value);
    }
}
exports.setState = setState;
// export const useStateStore = (us) => (key, initValue) => useStore(key, initValue, us)
/**
 * @param {Function} _useState
 */
function useStateStore(_useState) {
    return function (key, init_value) {
        return useStore(key, init_value, _useState);
    };
}
exports.useStateStore = useStateStore;
/**
 * @param {string} key
 * @param {any} init_value
 */
function useStore(key, init_value, uState) {
    var _a = (uState || globaState || react_1.useState)(init_value !== undefined ? init_value : (states[key] || {}).initState), value = _a[0], setValue = _a[1];
    if (key in states) {
        !~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
    }
    else
        states[key] = {
            hooks: [setValue],
            initState: init_value
        };
    return [value, setState.bind(null, key)];
}
exports.useStore = useStore;
/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
function initStore(init_dict, _useState) {
    for (var key in init_dict) {
        states[key] = {
            hooks: [],
            initState: init_dict[key]
        };
    }
    globaState = _useState;
}
exports.initStore = initStore;
