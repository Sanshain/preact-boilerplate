//@ts-check

import { styled } from "goober";

const fonts = Object.freeze({
    heading: 'monospace'
});


export const Icon = styled('span')`
    display: flex;
    flex: 1;
    color: red;
`;

export const Button = styled('button')`
    background: dodgerblue;
    color: white;
    margin-top: 1em;  
    border: ${Math.random()}px solid white;
    transition: .2s;

    &:focus,
    &:hover {
        padding: 1em;
    }

    .otherClass {
        margin: 0;
    }

    ${Icon} {
        color: black;
    }
`;