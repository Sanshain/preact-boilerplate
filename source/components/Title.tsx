//@ts-check

// import { h, } from 'preact';
// import { createElement, } from 'react';
// import React from 'react';
import { useSelector } from 'react-redux'
import { store } from '../redux/index'


type GlobalState = ReturnType<typeof store['getState']>;

export default function Title() {
    
    const count = useSelector<GlobalState>(state => state.value)

    return <h3>        
        Total count {count}
    </h3>
}