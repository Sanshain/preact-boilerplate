#### These templates are based on `create-nollup-app` template


## Features

- **React** compatible api (imports from react)
- **Hot** module reloading
- **Linaria** - out of the box (w/o styled feture and maps in hmr mode)
- **cssmodules** based on postcss modules (works just like original css modules)
- **goober** - tiny runtime styled components analogous
- **typescript** support
- **preact-router** - tiny simple equivalent for `react-router`
- **32 kb** - minified template size (consisting of preact (~10kb), preact-hooks(~10kb), goober (~2kb), preact-wouter(~4kb), template's code itself(~6kb))


<br>

### Getting started with `degit` or `git clone`: 


```powershell
degit user/Sanshain#react_ts_hmr_linaria_cssmodules_goober_preactroutes
```

or 

```powershell
git clone Sanshain#react_ts_hmr_linaria_cssmodules_goober_preactroutes
```

<details><summary><h4>more detailed if you don't aware of what do to next...<h4></summary>

then

```sh
cd preact-boilerplate && npm i -f   # or the same due pnpm
```
If you initlized the app via git you should remove git history, cloned from the repo to start from scratch: 

```sh
rm -r .get && git init && git add .
```

and install all dependencies: 

```sh
npm i -f   # or the same due pnpm
```

preapare reatom dependencies: 

```sh
node .\modules\.prescript.js
```

## How to use

#### Windows

```sh
npm run dev:w
```

#### Unix

```sh
npm run dev:u
```

</details>



<br>
<br>
<br>



## Cheat sheets, how to install from a scratch:


- Install fixed @prefresh/nollup package with the corrected exports (created due [this service](https://gitpkg.vercel.app/about)):

    ```sh
    npm install 'https://gitpkg.now.sh/Sanshain/prefresh/packages/nollup?main' -D
    ```

- Install `@linaria/rollup` with force flag (inapproproiate peer debendencies with `@linaria/rollup` package (it seems so), but I couldn't find out where is it inside linaria repository):

    ```sh
    npm i @linaria/rollup -D -f
    ```

- Install fixed `nollup` (inter alia in dev branch source-map-fast version is fixed) to drown out linaria sourcemap merging error in hmr mode (`linaria` will be without maps. Unfortunately, it's an unavoidable sacrifice). 

    ```sh
    npm i github:Sanshain/nollup#fix -D -f    
    ```
    or might to choice dev branch  as well: 
    ```sh
    npm i github:Sanshain/nollup#dev -D -f    
    ```    

- set global variable in public directory html head script: 

    ```js
    window.process = {
        env: {
            NODE_ENV: undefined
        }
    }    
    ```
- install `npm i @rollup/plugin-alias -D -f` and add it to `rollup.config.js`:
    ```js
    import alias from '@rollup/plugin-alias';

    ///...

    const config = {
        ///...
        plugins: [
            alias({
                entries: [
                    { find: 'react/hooks', replacement: 'preact/hooks' },
                    { find: 'react', replacement: 'preact/compat' },
                    { find: 'react-dom', replacement: 'preact/compat' }
                ]
            }),
            // ...
        ]
    }
    ```

- install hotcss plugin from Sanshain [fork](https://github.com/Sanshain/rollup-plugin-hot-css) (added `include` option, which one is required for the current rollup configuration): 
    ```sh
    npm i github:Sanshain/rollup-plugin-hot-css -D
    ```

- Be sure you have settled option `target` inside your `tsconfig.json`, for example: 

    ```json
    "target": "es2016"
    ```

- Copy `modules` filder with it `.prescript.js`: 


    ```js
    //@ts-check

    import fs from "fs";
    import path from "path";


    replace([
        '@reatom/npm-react',
        '@reatom/core'
    ]);

    /**
     * @param {string[]} paths
     */
    function replace(paths) {

        for (var _path of paths) {

            const originCode = fs.readFileSync(`../node_modules/${_path}/build/index.mjs`.slice(1)).toString();

            const fixedCode = originCode.replace(/([\w\.]+) \?\?=/g, '$1 = $1 ??');

            fs.writeFileSync(path.join('modules', `./${_path}.js`), fixedCode);   

            console.log(`\x1b[36m✓\x1b[0m - ${_path}`)
        }    
    }
    ```

    and set rollup aliases in `rollup.config.js`:

    ```js
        { find: '@reatom/npm-react', replacement: '/modules/@reatom/npm-react' },
        { find: '@reatom/core', replacement: '/modules/@reatom/core' },
    ```




#### little details::

The command above starts nollup directly through nodejs ([why](https://github.com/nodejs/node/issues/45580)) with `--no-experimental-fetch` (`--environment` for rollup cli doesn't work (may be because of nollup, but not sure)). Else sourcemaps will think it's a browser env and will require link to `mappings.wasm`.

### Build with

as usual due rollup (using `rollup -c` or `npm run rollup` or `npm run build` (no difference))


<br>
<br>
<br>
<br>

# Packages destinations: 

...collected by its features in the template:

## JSX compilation: 

- `@rollup/plugin-babel`
- `@babel/core`
- `@babel/plugin-transform-react-jsx`

## HMR:

- `@prefresh/nollup`
- `@prefresh/babel-plugin` ([recomended for hooks](https://github.com/Sanshain/prefresh/tree/main/packages/nollup#using-hooks))
- `nollup`
- `react-refresh`
- `rollup-plugin-hot-css` (hot reloading for css)


## Code building (it's default): 

- `@rollup/plugin-node-resolve`

## Production compilation: 

- `rollup`
- `rollup-plugin-static-files` (just copies static files to production dist - unneccessary)
- `rollup-plugin-terser` (minifier)

