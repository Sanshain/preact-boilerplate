//@ts-check

// import { styled } from '@linaria/react';
// import { families, sizes } from './fonts';
import { styled } from 'goober';




const Title = styled('h1')`
  font-family: 'monospace';
`;

// ${families.serif};

const Container = styled('div')`  
  color: ${props => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`;

/* font-size: ${sizes.medium}px; */
 
export default function () {
    return <>
        <Container color="#333">

            <Title>Hello world</Title>
        </Container>
    </>
}
















// const Icon = styled('span')`
//     display: flex;
//     flex: 1;
//     color: red;
// `;

// const Button = styled('button')`
//     background: dodgerblue;
//     color: white;
//     border: ${Math.random()}px solid white;

//     &:focus,
//     &:hover {
//         padding: 1em;
//     }

//     .otherClass {
//         margin: 0;
//     }

//     ${Icon} {
//         color: black;
//     }
// `;