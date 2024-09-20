//@ts-check

import { observer } from "mobx-react-lite";
import { useAppStore } from "../store/hooks";
import { VNode } from "preact";

// import { styled } from '@linaria/react';
// // import { families, sizes } from './fonts';


// const Title = styled.h1`
//   font-family: 'monospace';
// `;

// // ${families.serif};

// const Container = styled.div`  
//   color: ${props => props.color};
//   border: 1px solid gray;

//   &:hover {
//     border-color: blue;
//   }

//   ${Title} {
//     margin-bottom: 24px;
//   }
// `;

/* font-size: ${sizes.medium}px; */

const Title = (function ({ user = 'diar friend' }: { user: string }) {
// const Title = (function() {
// const Title = observer(({ user = 'diar friend' }: { user: string }) => {
  
  const appStore = useAppStore();

  return  <p className={'style.content2'}>
    Timer {appStore.secondsPassed}
  </p>
  
})

export default observer(Title);