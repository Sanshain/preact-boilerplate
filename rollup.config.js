//@ts-check

/// https://jsfiddle.net/onigetoc/0eov3fjm/ (import to require online convert)


const { default: node_resolve } = require('@rollup/plugin-node-resolve');
const css = require('rollup-plugin-css-only');
const { default: terser } = require('@rollup/plugin-terser');

const { default: babel } = require('@rollup/plugin-babel');
const hotcss = require('rollup-plugin-hot-css');
const prefresh = require('@prefresh/nollup');

// const htmlTemplate = require('rollup-plugin-generate-html-template');
const inline = require('rollup-plugin-html-inline').htmlInliner;

const { contentBase } = require("./.nolluprc");



const inDevelopment = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

const targetDir = 'dist';
const hmrDir = contentBase;   // used also inside nolluprc.js


// console.log('inDevelopment', inDevelopment)

const hmrNaming = inDevelopment && {
    entryFileNames: `[name].[hash].js`,
    assetFileNames: '[name].[hash][extname]',
} 

let config = {
    input: './src/main.js',
    output: {
        dir: targetDir,
        format: 'iife',        
        ...(hmrNaming || {                                              // hmr
            // assetFileNames: `[name][extname]`  <-- /// look for inline plugin            
        })
    },
    plugins: [
        // It seems this one works just in memory:
        inDevelopment
            ? hotcss({                                                  // hmr
                hot: true,
                file: `styles.css`  // 'styles.css' works too
            })
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

        /// production mode:

        !inDevelopment && inline({                                      // html.hash
            template: `./${hmrDir}/index.html`,
            hash: true,
        }),
        production && terser()                                          // minify
    ]
}

// if (production) {
//     config.plugins = config.plugins.concat([
//         terser()
//     ]);
// }

exports.default = config;
