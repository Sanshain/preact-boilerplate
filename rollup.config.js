//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';
import prefresh from '@prefresh/nollup';

// import htmlTemplate from 'rollup-plugin-generate-html-template';
// import html from '@open-wc/rollup-plugin-html';

import { htmlInliner as inline } from 'rollup-plugin-html-inline';


const inDevelopment = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

const targetPath = 'dist';


console.log('inDevelopment', inDevelopment)


let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,
        format: 'iife',
        assetFileNames: `[name][extname]`
        // entryFileNames: !inDevelopment && `[name].${hash}.js`,                
        // assetFileNames: '[name].[hash][extname]',
    },
    plugins: [
        // It seems this one works just in memory:
        inDevelopment
            ? hotcss({
                hot: true,
                file: `styles.css`  // 'styles.css' works too
            })
            // : css({ output: `styles.${hash}.css` }),
            : css({ output: `styles.css` }),        
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc' // hmr           
        }),
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        inDevelopment && prefresh(),                                    // hmr
        // html({minify: false})
        inline({
            template: './public/index.html',            
            hash: production,
            clean: !inDevelopment
        }),
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
