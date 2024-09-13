//@ts-check

import { styled } from 'goober';
// import { families, sizes } from './fonts';

const families = {
    serif: 'serif'
}

const Title = styled('h1')`
  font-family: ${families.serif};
`;
/* font-size: $ {sizes.medium}px; */


const Container = styled('div')`  
  color: ${props => props.color};
  border: 1px solid gray;
  font-size: .5em;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`;
 

export default function () {
    return <Container color="green">
        <Title>Hello from goober</Title>
    </Container>;
} 