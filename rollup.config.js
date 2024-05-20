//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';
import prefresh from '@prefresh/nollup';


import fs from "fs";
import path from "path";


// https://stackoverflow.com/questions/61565251/output-single-html-file-from-svelte-project

const inDevelopment = process.env.NODE_ENV === 'development';
console.log('inDevelopment', inDevelopment)


// const hash = Buffer.from((Math.random().toString().slice(2))).toString('base64');


// /**
//  * 
//  * @param {{
//  *  template: string,
//  *  dest?: string
//  * }} options 
//  * @returns 
//  */
// function inlineSvelte({template, dest}) {
//     return {
//         name: 'Svelte Inliner',
//         /**
//          * @param {{ file: string; }} opts
//          * @param {{ [x: string]: { code: string; }; }} bundle
//          */
//         generateBundle(opts, bundle) {
//             debugger
//             const templateContent = fs.readFileSync(template, 'utf-8')

//             const file = path.parse(opts.file).base
//             const code = bundle[file].code
//             bundle[file].code = templateContent.replace('%%script%%', () => code)
//         }
//     }
// }


let config = {
    input: './src/main.js',
    output: {
        dir: 'dist',
        format: 'iife',
        // entryFileNames: '[name].[hash].js',
        // assetFileNames: '[name].[hash][extname]',
        assetFileNames: '[name][extname]'
    },
    plugins: [
        // It seems this one works just in memory:
        inDevelopment
            ? hotcss({
                hot: true,
                file: './dist/styles.css'  // 'styles.css' works too
            })
            : css({ output: 'styles.css'}),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc'            
        }),        
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        inDevelopment && prefresh(),
        // inlineSvelte({
        //     template: './public/index.html'
        // })
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
