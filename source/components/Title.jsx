
import { h, } from 'preact';
// import { createElement, } from 'react';
// import React from 'react';
import { useSelector } from 'react-redux'

export default function Title() {
    
    const count = useSelector(state => state.value)

    return <h3>
        Total count {count}
    </h3>
}