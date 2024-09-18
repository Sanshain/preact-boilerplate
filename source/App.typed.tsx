//@ts-check

// import { h } from 'preact';
import type { FC, PropsWithChildren } from 'react';
// import type {
// 	// ComponentType,
// 	FunctionComponent
// } from 'preact';

import { useAction, useAtom } from '@reatom/npm-react'

import { useEffect } from "preact/hooks";

// import "./style.module.css";

import style from "./style.module.css";
import { numberAtom } from './state';


type Props = PropsWithChildren<{ nameTitle: string }>;

const App: FC<Props> = ({ nameTitle, children }, context?: unknown) => {

	console.log(context);

	useEffect(() => console.log('effect'), []);

	const [count, setCount] = useAtom(numberAtom)

	return (
		<>
			<main>
				<h1 className={style.title}>{nameTitle}!!</h1>
				<p>
					Ready to build something amazing?
					<a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
				</p>
				<h3>Total counts {count}</h3>
				<button onClick={() => setCount(v => v + 1)}></button>				
			</main>
		</>
	);
};

export default App;
