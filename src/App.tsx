//@ts-check


/// CSS MODULES:

// import './style.css';
import style from './style.css';


/// LINARIA:


// till just with css:
import { css } from '@linaria/core';
import type { LinariaClassName } from "@linaria/core/types"

// styled tag is still doesn't work:
import { default as Title } from "./components/Title";


/// LINARIA ADDITIONAL BUILD TIME FEATURES

import { modularScale, hiDPI } from 'polished';


import { Observer, observer, useLocalObservable, useObserver } from "mobx-react-lite"
import { useAppStore, Context } from './store/hooks'; // index.jsx
import { createAppStore } from './store';



const fonts = {
  header: 'Arial'
} as const


const title: LinariaClassName = css`
  text-transform: uppercase;
  color: red;
  color: green;
  font-family: ${fonts.header},
  font-size: ${modularScale(2)};
  /* $hiDPI(1.5)} {
    font-size: $modularScale(2.5)};
  } */
`;



const App = observer(() => {
// const App = (function () {

  const link = "https://github.com/Sanshain/preact-boilerplate";


  const appStore = useAppStore();

  return (    
      <div style={{ backgroundColor: 'aliceblue' }}>
        <h1 class={title}>Hello World!!!</h1>
        <p className={style.content}>
          <span>Welcome to </span>
          <a style={{ color: 'green' }} target={"_blank"} href={link}>Sanshain's preact boilerplates</a>
        </p>
        <hr />
        <button onClick={e => appStore.increase()}>click time</button>

      <Title user={"Sasha"} />
      {/* <Title /> */}
      </div>    
  );

})

// export default () => observer(() => <App />);
export default () => {
  const store = useLocalObservable(() => createAppStore(10));  

  return <Context.Provider value={store}>
    <App />
  </Context.Provider>
}
// export default () => <Observer><App/></Observer>;