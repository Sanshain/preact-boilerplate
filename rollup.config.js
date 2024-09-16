//@ts-check
import babel from '@rollup/plugin-babel'
import jsx from 'rollup-plugin-jsx'; // as babel alternative

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




const distPath = 'release'

// const development = !!process.env.ROLLUP_WATCH;	/// also works [on window] - checked
const development = ~process.argv.indexOf('-w') 
const production = !development;


const options = {
	prerender: false,
	source: {
		file: 'index__prer'
	},
	target: {
		dirname: distPath,
		ssr: 'init'
	}
}


export default {
	input: `source/${options.prerender ? options.source.file : 'index'}.js`,
	output: {
		file: `${distPath}/${options.prerender ? options.target.ssr : 'bundle'}.js`,
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		alias({
			entries: [
				{ find: 'react/hooks', replacement: 'preact/hooks' },
				{ find: 'react', replacement: 'preact/compat' },
				{ find: 'react-dom', replacement: 'preact/compat' }
			]
		}),

		development && serve({
			open: true,
			port: 3000,
			contentBase: distPath,
			historyApiFallback: true
		}),
		development && livereload({
			watch: distPath
		}),

		typescript({
			tsconfig: "./tsconfig.json",
			// compilerOptions: {
			// 	lib: ["es5", "es6", "dom"],
			// 	target: "es5"
			// 	// typescript: require('typescript')
			// }
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
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		}),
		// jsx({ factory: 'React.createElement' }),

		commonjs(),
		// es3(),
		resolve({
			browser: true,
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
		}),
		production && terser()
	],
	/**
	 * @typedef {{
	 * 		code: string,
	 * 		plugin: 'typescript',
	 * 		message: string
	 * }} WarnInfo
	 */
	onwarn: function (/** @type {WarnInfo} */ warning, /** @type {(arg: any) => void} */ handler) {

		// console.warn(warning)

		if (warning.code == 'PLUGIN_WARNING' && warning.plugin == 'typescript') {
			if (~warning.message.indexOf('.module.css\' or its corresponding type declarations')) {
				console.log(`>> Skiped vague css modules warning with typescript plugin, despite it works fine`)

				return;
			}
		}

		handler(warning);
	}	
}


if (options.prerender) {

	const file = path.resolve(__dirname, options.target.dirname, options.target.ssr + '.js');
	if (fs.existsSync(file)) {

		execSync(`cd ${distPath} && node ` + options.target.ssr);
		console.log('prerender finished');
	}
}