
import './style.css'
import { FC, ReactElement, PropsWithChildren, ReactNode } from "react";


/// @ LINAIRIA:

// till just with css:
import { css } from '@linaria/core';
// import { default as Title } from "./components/Title";

// import { modularScale, hiDPI } from 'polished';
// import fonts from './fonts';


const app = css`
  text-transform: uppercase;
  color: red;
  /* color: blue; */
`;

/// comments inside css tag doesn't work:

/* font-family: ${fonts.heading};
font-size: ${modularScale(2)};
${hiDPI(1.5)} {
  font-size: ${modularScale(2.5)};
} */


// interface ChildrenProps extends PropsWithChildren {

interface ChildrenProps {
  title?: string;
  children?: ReactNode;  
}


const App: FC<ChildrenProps> = ({ title = 'guy', children }: ChildrenProps): ReactElement => {
    return (
        <div class={app}>
            <h1>Hello World, {title}!!!</h1>
            <div className="header">111-111-1112</div>
            {children}
            {/* <Title /> */}
        </div>        
    );
}

export default App;


// for more information about preact typing, see https://preactjs.com/guide/v10/typescript/#typescript-configuration