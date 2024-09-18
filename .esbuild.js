//@ts-check

import esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import alias from "esbuild-plugin-alias";
// import aliasesFromTypes from "esbuild-ts-paths";

import path from 'path';


// TODO liveserver: https://github.com/zaydek/esbuild-hot-reload/blob/master/serve.js


const watchMode = process.argv.length > 2;


const aliases = {
	'react/hooks': './node_modules/preact/hooks',
	'react': './node_modules/preact/compat/dist/compat.js',
	'react-dom': './node_modules/preact/compat',
}

const absAliases = Object.fromEntries(Object.entries(aliases)
	.map(([k, v]) => [k, path.join(path.dirname(process.argv[1]), v)]))


let config;


/**
 * @typedef {import('esbuild').Loader} Loader
 */


const build = async function () {

	console.time('built')

	await esbuild.build(config = {
		bundle: true,
		entryPoints: ['./source/index.js'],
		outfile: './release/bundle.js',
		minify: !watchMode,
		sourcemap: true,
		// incremental: true,
		plugins: [
			alias(absAliases),
			// aliasesFromTypes(),		
			cssModulesPlugin({
				// @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
				// force: true,
				// emitDeclarationFile: true,
				// localsConvention: 'camelCaseOnly',
				namedExports: true,
				inject: false
			})
		],
		loader: {
			/** @type {Loader} */ '.js': 'jsx',
			/** @type {Loader} */ '.ts': 'ts',
			/** @type {Loader} */ '.tsx': 'tsx'
		}
	});

	if (watchMode) {		
		
		const ctx = await esbuild.context(config);

		await ctx.watch();			

		console.log('..rebuilt')
	}

	console.timeEnd('built')

}

build();

