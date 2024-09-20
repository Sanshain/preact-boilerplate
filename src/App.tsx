//@ts-check


/// CSS MODULES:

// import './style.css';
import style from './style.css';


/// LINARIA:


// till just with css:
import { css } from '@linaria/core';
import type { LinariaClassName } from "@linaria/core/types"

// styled tag is still doesn't work:
// import { default as Title } from "./components/Title";


/// LINARIA ADDITIONAL BUILD TIME FEATURES

import { modularScale, hiDPI } from 'polished';


import { Observer, observer } from "mobx-react-lite"
import { useAppStore, MobxProvider } from './store/Provider'; // index.jsx



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



// const App = observer(() => {
const App = (function () {

  const link = "https://github.com/Sanshain/preact-boilerplate";

  const appStore = useAppStore();

  return (
    <MobxProvider>
      <div style={{ backgroundColor: 'aliceblue' }}>
        <h1 class={title}>Hello World!!!</h1>
        <p className={style.content}>
          <span>Welcome to </span>
          <a style={{ color: 'green' }} target={"_blank"} href={link}>Sanshain's preact boilerplates</a>
        </p>
        <hr />
        <p className={style.content2}>
          Timer {appStore.secondsPassed}
        </p>
        <button onClick={e => appStore.increase()}>click time</button>

        {/* <Title user={"Sasha"} /> */}
      </div>
    </MobxProvider>
  );

})

// export default () => observer(() => <App />);
export default App;
// export default () => <Observer><App/></Observer>;