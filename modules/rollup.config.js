//@ts-check

export default [
    {
        input: '../node_modules/goober/src/index.js',
        output: {
            dir: 'goober',
            format: 'esm',
            // assetFileNames: `[name][extname]`,
        }
    },
    {
        input: '../node_modules/preact/src/index.js',
        output: {
            dir: 'preact',
            format: 'esm',
            // assetFileNames: `[name][extname]`,
        }
    },
]