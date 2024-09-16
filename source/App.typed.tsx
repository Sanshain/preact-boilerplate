//@ts-check

// import { h } from 'preact';
import type { FC, PropsWithChildren } from 'react';

// import "./style.module.css";

import style from "./style.module.css";
import { useEffect } from 'preact/hooks';


type Props = PropsWithChildren<{ nameTitle: string }>;

const App: FC<Props> = ({ nameTitle, children }, context?: unknown) => {

  useEffect(() => console.log('effect'))
  
  console.log(context)

  return (
    <>
      <main>
        <h1 className={style.title}>{nameTitle}!!</h1>
        <p>
          <h4 style={{ color: 'blueviolet'}}>
            Ready to build something amazing?
          </h4> 
          <hr />
          <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default App;
