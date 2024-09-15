//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';

/// jsx (and hmr optionally)

import babel from '@rollup/plugin-babel';

/// typescript

// import jsx from 'acorn-jsx';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild'



/** 
* `rollup-plugin-hot-css` i couldn't force to work with postcss as well as with css-only
*   But they works togather quite harmoniously (moved to optional dependencies)
*/
// import hotcss from 'rollup-plugin-hot-css';
// import css from 'rollup-plugin-css-only'

/// prod

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';

/// hmr:

import prefresh from '@prefresh/nollup';
// import postcss from 'rollup-plugin-postcss'
import postcss from 'rollup-plugin-postcss-hot'



// import htmlTemplate from 'rollup-plugin-generate-html-template'; // or rollup-plugin-html-inline


const inDevelopment = process.env.NODE_ENV === 'development';

const targetPath = 'dist';



/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: './src/main.js',
    output: {
        dir: targetPath,        
        format: 'iife',
        assetFileNames: `[name][extname]`,   
    },
    plugins: [

        // It seems this one works just in memory:
        postcss({
            hot: inDevelopment,                                              // hmr
            extract: 'styles.css',        /// it could be `style/styles.css` as well
            minimize: !inDevelopment,
            modules: true,                                                   // css modules
            namedExports: true
            // extract: true
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc'      // hmr           
        }),

        !inDevelopment
            ? typescript({
                tsconfig: './tsconfig.json',
                exclude: [
                    './**/*.css'
                ]
            })
            : esbuild({
                // All options are optional
                // include: /\.[jt]sx?$/, // default, inferred from `loaders` option
                exclude: /node_modules/, // default
                // sourceMap: true, // default            
                minify: false,
                tsconfig: 'tsconfig.json', // default
                // Add extra loaders
                loaders: {
                    // Add .json files support
                    // require @rollup/plugin-commonjs
                    // '.json': 'json',
                    // Enable JSX in .js files too
                    '.js': 'jsx',
                },
            }),



        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        
        //@ts-expect-errorz
        inDevelopment && prefresh(),                                          // hmr
    ],

    // /**
    //  * @description works only with rollup builder 
    //  * @_typedef {{
    //  * 		code: string,
    //  * 		plugin: 'typescript',
    //  * 		message: string
    //  * }} WarnInfo
    //  * @type {import('rollup').WarningHandlerWithDefault}
    //  */
    // onwarn: function (warning, /** @type {(arg: any) => void} */ handler) {
        
    //     if (warning.code == 'PLUGIN_WARNING' && warning.plugin == 'typescript') {            

    //         if (~warning.message.indexOf('.module.css\' or its corresponding type declarations')) {
    //             console.log(`>> Skiped vague css modules warning with typescript plugin, despite it works fine`)

    //             return;
    //         }
    //     }

    //     handler(warning);
    // }    
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
