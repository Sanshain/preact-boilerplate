//@ts-check
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import css from 'rollup-plugin-css-only'

import static_files from 'rollup-plugin-static-files';
import terser from '@rollup/plugin-terser';
import prefresh from '@prefresh/nollup';

import htmlTemplate from 'rollup-plugin-generate-html-template';
import html from '@open-wc/rollup-plugin-html';



import fs from "fs";
import path from "path";


// https://stackoverflow.com/questions/61565251/output-single-html-file-from-svelte-project

const inDevelopment = process.env.NODE_ENV === 'development';
const targetPath = 'dist';
const hashed = !inDevelopment;


console.log('inDevelopment', inDevelopment)


const hashB64 = Buffer.from((Math.random().toString().slice(2))).toString('base64').slice(0, 6);


/**
 * 
 * @param {{
 *  template: string,
 *  dest?: string,
 *  hashBy?: 'time'|'file'
 *  hash: boolean
 * }} options 
 * @returns 
 */
function htmlInliner({ template, dest, hash, hashBy}) {
    return {
        name: 'html-inline',
        /**
         * @param {{ file: string; dir: string | undefined }} options
         * @param {{ [x: string]: { code?: string; fileName: string; source: string } }} bundle
         * @this {import('rollup').PluginContext}
         */
        generateBundle(options, bundle) {
            
            debugger

            const targetDir = options.dir || path.dirname(options.file);

            if (hash && fs.existsSync(targetDir)) {
                fs.rmSync(targetDir, { recursive: true })                
            }

            let templateContent = fs.readFileSync(template, 'utf-8')
            

            if (options.file) {
                if (path.extname(options.file) == '.html') {
                    
                }
                else {
                    // this.warn('in "output.file" options contains non html file')
                    // save to `index.html`
                }
            }
            debugger

            Object.keys(bundle).forEach(fileName => {
                const { name, ext } = path.parse(fileName);
                
                const pattern = (name + '.[hash]' + ext)
                
                let hashSalt = hashBy == 'file'
                    ? (bundle[fileName].code || bundle[fileName].source).length.toString()
                    : hashB64;

                const fixedName = pattern.replace('[hash]', hashSalt);

                templateContent = templateContent.replace(pattern, () => {
                    return fixedName
                });
                bundle[fixedName] = bundle[fileName];
                bundle[fixedName].fileName = fixedName

                debugger

                Reflect.deleteProperty(bundle, fileName)
            })

            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, {recursive: true});

            fs.writeFileSync(path.join(targetDir, (dest || 'index.html')), templateContent);

            debugger
            // const file = path.parse(options.file).base
            // const code = bundle[file].code
            // bundle[file].code = templateContent.replace('%%script%%', () => code)
        }
    }
}


let config = {
    input: './src/main.js',
    output: {
        dir: targetPath,
        format: 'iife',
        // entryFileNames: !inDevelopment && `[name].${hash}.js`,
        // assetFileNames: '[name].[hash][extname]',
        // assetFileNames: `[name].${hash}[extname]`
    },
    plugins: [
        // It seems this one works just in memory:
        inDevelopment
            ? hotcss({
                hot: true,
                file: `./${targetPath}/styles.css`  // 'styles.css' works too
            })
            // : css({ output: `styles.${hash}.css` }),
            : css({ output: `styles.css`}),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            configFile: inDevelopment ? './.dev.babelrc' : './.babelrc'            
        }),        
        node_resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
        }),
        inDevelopment && prefresh(),
        // html({minify: false})
        htmlInliner({
            template: './public/index.html',
            hash: true,
            // hashBy: 'file'
        }),
        // htmlTemplate({
        //     template: 'public/index.html',
        //     target: 'index.html',
        //     replaceVars: hashed && {
        //         '\\.\\[hash\\]': hash
        //     }
        // }),
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
