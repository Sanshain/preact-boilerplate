import { styled, setup } from 'goober';

export const Icon = styled('span')`
    display: flex;
    flex: 1;
    color: red;
`;

export const Button = styled('button')`
    background: dodgerblue;
    color: white;
    border: ${Math.random()}px solid white;
    transition: 0.2s;

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