//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';

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
        // format: inDevelopment ? 'es' : 'iife',
        format: 'iife',
        assetFileNames: `[name][extname]`
    },
    // inlineDynamicImports: inDevelopment && true,
    plugins: [
        // It seems this one works just in memory:
        postcss({
            hot: inDevelopment,
            inject: true,
            extract: 'styles.css',    // style/styles.css                    // css modules
            minimize: !inDevelopment,
            modules: true,
            namedExports: true
            // extract: true
        }),
        // inDevelopment
        //     && hotcss({                                            // hmr
        //         hot: true,
        //         file: `styles.css`  // 'styles.css' works too
        //     }),
            // : css({ output: `styles.css` }),
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
