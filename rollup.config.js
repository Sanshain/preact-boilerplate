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

import linaria from "@linaria/rollup";


import postcss from 'rollup-plugin-postcss-hot';
import esbuild from 'rollup-plugin-esbuild'



/// ts: 


import typescript from '@rollup/plugin-typescript';


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



const linariaNamingPattern = /_[\d\w]{6,7}.css/;
// const cssModulesNamePattern = /_module\.css/


let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,
        format: 'iife',
        assetFileNames: `[name][extname]`,        
    },
    plugins: [

        // typescript(), /// <- works as well too

        esbuild({
            // All options are optional
            include: /\.[jt]sx?$/, // default, inferred from `loaders` option
            exclude: /node_modules/, // default
            sourceMap: true, // default
            // minify: process.env.NODE_ENV === 'production',
            minify: false,
            // target: 'es2017', // default, or 'es20XX', 'esnext'
            // jsx: 'transform', // default, or 'preserve'
            // jsxFactory: 'React.createElement',
            // jsxFragment: 'React.Fragment',
            // Like @rollup/plugin-replace
            // define: {
            //     __VERSION__: '"x.y.z"',
            // },
            tsconfig: 'tsconfig.json', // default
            // Add extra loaders
            loaders: {
                // Add .json files support
                // require @rollup/plugin-commonjs
                '.json': 'json',
                // Enable JSX in .js files too
                '.js': 'jsx',
            },
        }),        
        
        // typescript({
        //     tsconfig: "./tsconfig.json",
        // }),

        linaria({
            // sourceMap: !inDevelopment       /// <- works just with `!inDevelopment` mode (via rollup)
            sourceMap: true
        }),
        // It seems this one works just in memory:
        inDevelopment
            ? hotcss({
                include: linariaNamingPattern,                
                hot: true,
                file: `styles.css`  // 'styles.css' works too
                // loaders: [postCSSLoader] || ['scss', 'less', 'stylus']
            })
            // : css({ output: `styles.${hash}.css` }),
            : css({ output: `styles.css` }),    
        
        postcss({
            exclude: linariaNamingPattern,
            hot: inDevelopment,                                              // hmr
            // extract: 'styles.css',    /// it could be `style/styles.css`
            minimize: !inDevelopment,
            modules: true,                                                   // css modules
            namedExports: true
            // extract: true
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
