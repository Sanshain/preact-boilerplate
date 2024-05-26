//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';

/// jsx (and hmr optionally)

import babel from '@rollup/plugin-babel';

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


console.log('inDevelopment', inDevelopment)


let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,        
        format: 'iife',
        assetFileNames: `[name][extname]`
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
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        inDevelopment && prefresh(),                                          // hmr
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
