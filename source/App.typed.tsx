//@ts-check

import { h } from 'preact';
import type { FunctionalComponent } from 'preact';

// import "./style.module.css";

import style from "./style.module.css";


interface IndexProps {}

const App: FunctionalComponent<IndexProps> = () => {
  return (
    <>
      <main>
        <h1 className={style.title}>Welcome to Microsite!</h1>
        <p>
          Ready to build something amazing?
          <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default App;
