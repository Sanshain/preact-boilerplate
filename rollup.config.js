//@ts-check

//@ts-expect-error
globalThis.fetch = null;

import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';
import prefresh from '@prefresh/nollup';

import typescript from '@rollup/plugin-typescript';
import linaria from "@linaria/rollup";
import postcss from 'rollup-plugin-postcss-hot'



/// html:

import { htmlInliner as inline } from 'rollup-plugin-html-inline';
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
        linaria({
            // sourceMap: !inDevelopment       /// <- works just with `!inDevelopment` mode (due rollup)
            sourceMap: true
        }),
        // It seems this one works just in memory:
        inDevelopment
			? hotcss({
				include: /_[\d\w]{6,7}.css/,
                hot: true,
                file: `styles.css`  // 'styles.css' works too
                // loaders: [postCSSLoader] || ['scss', 'less', 'stylus']
            })
            // : css({ output: `styles.${hash}.css` }),
			: css({ output: `styles.css` }),  
		postcss({
			exclude: /_[\d\w]{6,7}.css/,
			hot: inDevelopment,                                              // hmr
			// extract: 'style.css',    /// it could be `style/styles.css`
			minimize: !inDevelopment,
			modules: true,                                                   // css modules
			namedExports: true
			// extract: true
		}),

        typescript({
            tsconfig: './tsconfig.json'
        }),        

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
