import babel from 'rollup-plugin-babel'

import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'


// import alias from '@rollup/plugin-alias';
// import es3 from 'rollup-plugin-es3';

// import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss'


import { execSync } from "child_process";
import fs from "fs";
import path from "path";


const dist = 'release'
const production = !process.env.ROLLUP_WATCH
const development = !production

const options = {
	prerender: true,
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
	plugins: [
		resolve({
			browser: true,
		}),
		//  development && serve({
		//    open: true,
		//    port: 3000,
		//    contentBase: dist,
		//    historyApiFallback: true
		//  }),
		//  development && livereload({
		//    watch: dist
		//  }),
		babel({
			exclude: 'node_modules/**'					
		}),
		postcss({
			extract: `style/bundle.css`,
			minimize: production
		}),
		production && terser()
	]
}


if (options.prerender){
	const file = path.resolve(__dirname, options.target.dirname, options.target.ssr + '.js');
	if (fs.existsSync(file)){
		
		execSync(`cd ${dist} && node ` + options.target.ssr);
		console.log('prerender finished');
	}
}