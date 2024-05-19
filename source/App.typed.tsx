//@ts-check

// import { h } from 'preact';
import type { FC, PropsWithChildren } from 'react';

// import "./style.module.css";

import style from "./style.module.css";


type Props = PropsWithChildren<{ nameTitle: string }>;

const App: FC<Props> = ({ nameTitle, children }, context?: unknown) => {
  console.log(context);
  return (
    <>
      <main>
        <h1 className={style.title}>{nameTitle}!!</h1>
        <p>
          Ready to build something amazing?
          <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default App;
