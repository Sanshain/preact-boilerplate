//@ts-check

// import { h, } from 'preact';
// import { createElement, } from 'react';
// import React from 'react';
import { useSelector } from 'react-redux'
import { store } from '../redux/index'


type GlobalState = ReturnType<typeof store['getState']>;

export default function Title() {
    
    /// using w/o types:

    // const count = useSelector(state => state.value)

    /// using w types: 

    const useStateSelector = useSelector.withTypes<GlobalState>()
    // const count = useStateSelector(state => state.value)

    /// using w types combined reducers:

    const count = useStateSelector(state => state.counter.value)

    return <h3>        
        Total count {count + 1}
    </h3>
}