#### Has been get based with `create-nollup-app` 

## Not recommended to use bacause of a large size of mobx (89kb + 8kb compat for mobx-lite-react) => initial minified template is 107 kb


### Features


- **Hot** module reloading
- **Linaria** out of the box (w/o maps in hmr mode)


### Cheat sheets, how to install from a scratch:


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


## How to use: 

### Get started:

#### via degit:

```sh
degit Sanshain/preact-boilerplate#js_hmr_html
```

#### via git: 

```sh
git clone Sanshain/preact-boilerplate#js_hmr_html && rm -r .get && git init
```

### Install deps: 

```sh
cd preact-boilerplate && npm i -f   # or the same due pnpm
```

### Develop with

#### Windows

```
npm run dev:w
```

#### Unix

```
npm run dev:u
```

#### little details::

The command above starts nollup directly through nodejs ([why](https://github.com/nodejs/node/issues/45580)) with `--no-experimental-fetch` (`--environment` for rollup cli doesn't work (may be because of nollup, but not sure)). Else sourcemaps will think it's a browser env and will require link to `mappings.wasm`.

### Build with

as usual due rollup (using `rollup -c` or `npm run rollup` or `npm run build` (no difference))

### Packages destinations: 

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
