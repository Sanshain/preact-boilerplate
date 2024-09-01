//@ts-check

//@ts-expect-error
globalThis.fetch = null;

import node_resolve from '@rollup/plugin-node-resolve';

// JSX

import babel from '@rollup/plugin-babel';
import prefresh from '@prefresh/nollup';
import alias from '@rollup/plugin-alias';

// CSS

/// just for whole css import
// import hotcss from 'rollup-plugin-hot-css';
// import css from 'rollup-plugin-css-only'


import linaria from "@linaria/rollup";
/// import wyw from '@wyw-in-js/rollup';		// recommended officially from linaria, but doesn't work (at all) and nobody know, how to handle with a troubles

import postcss from 'rollup-plugin-postcss-hot'




import static_files from 'rollup-plugin-static-files';		// copies static files from specific locations (additional optional tool for copying to production folder on prod mode)
import terser from '@rollup/plugin-terser';					// just for production


/// HTML

import { htmlInliner as inline } from 'rollup-plugin-html-inline';		// ? - look on appropriate called branch - is it surely useful?
// import htmlTemplate from 'rollup-plugin-generate-html-template';
// import html from '@open-wc/rollup-plugin-html';


// console.log(process.env)
const inDevelopment = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

const targetPath = 'dist';

// console.log('inDevelopment', inDevelopment)

// console.log(process.env.NODE_OPTIONS)


// let autoprefixer = require('autoprefixer')
// let postcss = require('postcss')
// function postCSSLoader(input, id) {
//     return postcss([autoprefixer]).process(input.code).then(res => {
//         return {
//             code: res.css
//         };
//     });
// }



let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,
        format: 'iife',
        assetFileNames: `[name][extname]`,        
    },
    plugins: [
        alias({
            entries: [
                { find: 'react/hooks', replacement: 'preact/hooks' },
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        }),
        linaria({
            // sourceMap: !inDevelopment       /// <- works just with `!inDevelopment` mode (due rollup)
            sourceMap: true
        }),
		// It seems this one works just in memory:
		// postcss({
		// 	hot: inDevelopment,                                              // hmr
		// 	extract: 'styles.css',    /// it could be `style/styles.css`
		// 	minimize: !inDevelopment,
		// 	modules: true,                                                   // css modules
		// 	namedExports: true
		// 	// extract: true
		// }),		
        // inDevelopment
        //     ? hotcss({
        //         hot: true,
        //         file: `styles.css`  // 'styles.css' works too
        //         // loaders: [postCSSLoader] || ['scss', 'less', 'stylus']
        //     })
        //     // : css({ output: `styles.${hash}.css` }),
        //     : css({ output: `styles.css` }),        
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc' // hmr           
        }),
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        inDevelopment && prefresh(),                                    // hmr
    ]
}

// if (process.env.NODE_ENV === 'production') {
//     config.plugins = config.plugins.concat([
//         //@ts-expect-error
//         static_files({
//             include: ['./dist']
//         }),
//         terser()
//     ]);
// }

export default config;
