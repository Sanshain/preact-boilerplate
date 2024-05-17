//@ts-check
import babel from '@rollup/plugin-babel'

import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
// import typescript from 'rollup-plugin-typescript2';
import typescript from "@rollup/plugin-typescript";


import alias from '@rollup/plugin-alias';
// import es3 from 'rollup-plugin-es3';
import css from 'rollup-plugin-css-only';
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss'
import commonjs from "@rollup/plugin-commonjs";


import { execSync } from "child_process";
import fs from "fs";
import path from "path";


const dist = 'release'
// const production = !process.env.ROLLUP_WATCH
let production = false;
const development = !production

const options = {
	prerender: false,
	source: {
		file: 'index__prer'
	},
	target: {
		dirname: dist,
		ssr: 'init'
	}
}


export default {
	input: `source/${options.prerender ? options.source.file : 'index'}.js`,
	output: {
		file: `${dist}/${options.prerender ? options.target.ssr : 'bundle'}.js`,
		format: 'iife',
		sourcemap: true
	},
	preserveModules: true,
	plugins: [
		alias({
			entries: [
				{ find: 'react/hooks', replacement: 'preact/hooks' },
				{ find: 'react', replacement: 'preact/compat' },
				{ find: 'react-dom', replacement: 'preact/compat' }
			]
		}),
		resolve({
			browser: true,			
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
		}),
		development && serve({
			open: true,
			port: 3000,
			contentBase: dist,
			historyApiFallback: true
		}),
		development && livereload({
			watch: dist
		}),
		postcss({
			// include: [
			// 	'./source/**/*.css'
			// ],
			extract: 'style/bundle.css',
			minimize: production,
			modules: true,
			// extract: true
		}),		
		// css({ output: 'style/bundle.css' }),
		/// for jsx
		babel({
			exclude: 'node_modules/**'
		}),
		typescript({
			compilerOptions: {
				lib: ["es5", "es6", "dom"],
				target: "es5"
				// typescript: require('typescript')
			}
		}),
		commonjs(),
		// es3(),

		production && terser()
	]
}


if (options.prerender) {

	const file = path.resolve(__dirname, options.target.dirname, options.target.ssr + '.js');
	if (fs.existsSync(file)) {

		execSync(`cd ${dist} && node ` + options.target.ssr);
		console.log('prerender finished');
	}
}