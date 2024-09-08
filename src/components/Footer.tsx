//@ts-check

// import { styled } from '@linaria/react';     //  still doesn't work

import { styled } from 'goober';
// import { families, sizes } from './fonts';


const Title = styled('h6')`
  font-family: 'monospace';
  color: green;
  font-family: 'Calibry';  
`;

// ${families.serif};

const Container = styled('div')`
  color: ${props => props.color};
  padding-bottom: 1px;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`;

/* font-size: ${sizes.medium}px; */
 
export default function ({user = 'diar friend'}: {user: string}) {
    return <>
        <Container color="red">

            <Title>And have a nice day, {user}!</Title>
        </Container>
    </>
}

