//@ts-check

import { h } from 'preact';
import type { FunctionalComponent } from 'preact';

// import "./style.module.css";

import style from "./style.module.css";


interface IndexProps {
  nameTitle: string
}

const App: FunctionalComponent<IndexProps> = ({ nameTitle }, context?: unknown) => {    
  console.log(context);
  return (
    <>
      <main>
        <h1 className={style.title}>{nameTitle}</h1>
        <p>
          Ready to build something amazing?
          <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default App;
