//@ts-check

// import { h } from 'preact';
// import { FC, PropsWithChildren } from 'react';

// import "./style.module.css";

/// css modules

import style from "./style.module.css";
import { useEffect } from 'preact/hooks';

/// redux

import { h, Fragment } from 'preact';

// import { useSelector, useDispatch } from 'react-redux'
// import { Provider } from 'react-redux'
// import { store } from './redux/index'
// import { incremented } from './redux/index'

// import Title from './components/Title'

/// typescript

// type Props = PropsWithChildren<{ nameTitle: string }>;


/// jsx 


// const App: FC<Props> = ({ nameTitle, children }, context?: unknown) => {
const App = ({ nameTitle, children }, context) => {

  useEffect(() => console.log('effect'))

  // const dispatch = useDispatch()

  console.log(context)

  return (
    <>
      <main>
        <h1 className={style.title}>{nameTitle}!!</h1>
        <p>          
            <h4 style={{ color: 'blueviolet' }}>
              Ready to build something amazing?
            </h4>
            {/* <Title /> */}
            {/* <button onClick={() => dispatch(incyremented())}>increment</button> */}
            <hr />
            <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.          
        </p>
      </main>
    </>
  );
};

export default App;
