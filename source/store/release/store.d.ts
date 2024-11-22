import { useState } from 'react';
/**
 * @param {string | number} key
 * @param {any} value
 */
export declare function setState<T>(key: string, value: T): void;
/**
 * @param {Function} _useState
 */
export declare function useStateStore(_useState: typeof useState): (key: string, init_value: unknown) => any[];
/**
 * @param {string} key
 * @param {any} init_value
 */
export declare function useStore(key: string, init_value: unknown, uState: typeof useState): any[];
/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
export declare function initStore(init_dict: {
    [x: string]: any;
}, _useState: typeof useState): void;
