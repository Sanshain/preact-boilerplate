//@ts-check

import { styled } from '@linaria/react';
// import { families, sizes } from './fonts';


const Title = styled.h1`
  font-family: 'monospace';
`;

// ${families.serif};

const Container = styled.div`  
  color: ${props => props.color};
  border: 1px solid gray;

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
        <Container color="#333">

            <Title>Hello world, {user}</Title>
        </Container>;
    </>
}

