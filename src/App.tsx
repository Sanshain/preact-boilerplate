//@ts-check


/// CSS MODULES:


import style from './style.css';


/// LINARIA:


// till just with css:
import { css } from '@linaria/core';
import type { LinariaClassName } from "@linaria/core/types"

// styled tag is still doesn't work:
import Footer from "./components/Footer";


/// LINARIA ADDITIONAL BUILD TIME FEATURES

import { modularScale, hiDPI } from 'polished';



import Observable from "./store/index";



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



function App({ query, onChangeQuery }) {

  const link = "https://github.com/Sanshain/preact-boilerplate";

  return (
    <div style={{ backgroundColor: 'aliceblue' }}>
      <h1 class={title}>Hello World!!!</h1>
      <p className={style.content}>
        <span>Welcome to </span>
        <a style={{ color: 'green' }} target={"_blank"} href={link}>Sanshain's preact boilerplates</a>
        <h3>Total clicks {query}</h3>
        <button onChange={e => onChangeQuery(query + 1)}>increase</button>
      </p>

      <Footer user={"friend"} />
    </div>
  );
}

// export default App;
export default Observable(App);