//@ts-check

//@ts-expect-error
globalThis.fetch = null;

import fs from "fs"
import path from "path"

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

// import esbuild from 'rollup-plugin-esbuild'
import esbuild from 'rollup-plugin-esbuild-transform'
// import { swc } from 'rollup-plugin-swc3';
import sucrase from '@rollup/plugin-sucrase';
import swc from '@rollup/plugin-swc';


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



const swcrc = JSON.parse(fs.readFileSync('./.swcrc', 'utf8'));


/** @_type {import('rollup').RollupOptions} */

let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,
        format: 'iife',
        assetFileNames: `[name][extname]`,        
    },
    plugins: [

        swc({
            tsconfig: './tsconfig.json',
            ...swcrc,
            jsc: {
                ...swcrc.jsc
            }
        }),

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


        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),

        // esbuild([
        //     {
        //         loader: 'json'
        //     },
        //     {
        //         loader: 'tsx',
        //         legalComments: 'eof'
        //     },
        //     {
        //         loader: 'ts',
        //         include: /\.tsx?$/,
        //         tsconfig: path.join(__dirname, 'tsconfig.json')
        //     },
        //     {
        //         output: true,
        //         minify: true,
        //         target: 'es2015'
        //     }
        // ]),

        // production
        //     ? typescript({ tsconfig: './tsconfig.json' })
        //     : esbuild({
        //         include: /\.[jt]sx?$/,
        //         minify: false,
        //         tsconfig: './tsconfig.json',
        //         loaders: {
        //             '.js': 'jsx'
        //         }
        //     }),

        babel({            
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',            
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc' // hmr           
        }),        
        

        inDevelopment && prefresh(),                                    // hmr
        
        production && terser()                                          // 
    ],
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
