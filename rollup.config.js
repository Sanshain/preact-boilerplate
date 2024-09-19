//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';

/// jsx (and hmr optionally)

import babel from '@rollup/plugin-babel';

/// typescript

// import jsx from 'acorn-jsx';
import typescript from '@rollup/plugin-typescript';


/// react

import alias from '@rollup/plugin-alias';


/** 
* `rollup-plugin-hot-css` i couldn't force to work with postcss as well as with css-only
*   But they works togather quite harmoniously (moved to optional dependencies)
*/
// import hotcss from 'rollup-plugin-hot-css';
// import css from 'rollup-plugin-css-only'

/// prod

import terser from '@rollup/plugin-terser';

/// hmr:

//@ts-expect-error
import prefresh from '@prefresh/nollup';
// import postcss from 'rollup-plugin-postcss'
//@ts-expect-error
import postcss from 'rollup-plugin-postcss-hot'


/// state managment (valtio):

import replace from '@rollup/plugin-replace'



// import commonjs from "@rollup/plugin-commonjs";
// import commonjs from "rollup-plugin-commonjs-alternate";


// import htmlTemplate from 'rollup-plugin-generate-html-template'; // or rollup-plugin-html-inline


const inDevelopment = process.env.NODE_ENV === 'development';

const targetPath = 'dist';


inDevelopment && console.log('in development mode')


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
        alias({
            entries: [
                // https://preactjs.com/guide/v10/getting-started/#aliasing-in-rollup
                { find: 'react/hooks', replacement: 'preact/hooks' },       // ? 
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' },
                { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
            ]
        }),

        replace({
            'import.meta.env': '(0)',
            'import.meta.env.MODE': 'undefined',
            preventAssignment: true
        }),

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

        typescript({
            tsconfig: './tsconfig.json',            
            exclude: [
                './**/*.css'
            ]
        }),        
        
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        // commonjs(),
        
        //@ts-ignore
        inDevelopment
            ? prefresh()                                          // hmr
            : terser()                                            // pro  
        
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
