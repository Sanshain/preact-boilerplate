//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';
import prefresh from '@prefresh/nollup';



// https://stackoverflow.com/questions/61565251/output-single-html-file-from-svelte-project

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
        hotcss({
            hot: process.env.NODE_ENV === 'development',
            file: './dist/styles.css'  // 'styles.css' works too
        }),
        
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        // css(),
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        process.env.NODE_ENV === 'development' && prefresh()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        //@ts-expect-error
        static_files({
            include: ['./dist']
        }),
        terser()
    ]);
}

export default config;
