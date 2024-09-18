#### Preact hmr template. Initially has been based on `create-nollup-app `

## Features

### Cheat sheets, how to install from a scratch:


- Installing the fixed package @prefresh/nollup (created due [this service](https://gitpkg.vercel.app/about) - there is exports [fixed](https://github.com/preactjs/prefresh/pull/547)) to use hmr with preact/react state:

    ```sh
    npm install 'https://gitpkg.now.sh/Sanshain/prefresh/packages/nollup?main' -D
    ```

- Disable strict ssl npm check and install `Sanshain/rollup-plugin-postcss-hot#dev` package to support hmr for postcss (fixed *"[Cannot use 'import.meta' outside a module](https://github.com/rixo/rollup-plugin-postcss-hot/issues/23)"*): 

    ```sh
    npm config set strict-ssl false
    npm i Sanshain/rollup-plugin-postcss-hot#dev -D
    ```

    then if you want, you could set it back to `true`: `npm config set strict-ssl true` and check it due `npm config list`

- Install patched nollup version (it sould be because of rollup imitation version is less then required, but worls fine):
    ```
    npm i Sanshain/nollup -D
    ```

- for **ts support** configure your tsconfig as follow:

    ```json
    "jsx": "react-jsx",                         /* Specify what JSX code is generated. */
    // "jsxFactory": "h",                       /* 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "Fragment",        /* 'React.Fragment' or 'Fragment'. */    
    "jsxImportSource": "preact",                /* Specify module specifier used to import the JSX factory functions when using `jsx:     

    /* Modules */
    "module": "esnext",                          /* Specify what module code is generated. */
    "moduleResolution": "node",                  /* Specify how TypeScript looks up a file from a given module specifier. */   

    "plugins": [
      {
        "name": "typescript-plugin-css-modules",
        "options": {
          "classnameTransform": "dashes",
          "customMatcher": "\\.module\\.css$",
          // "customRenderer": "./myRenderer.js",
          "dotenvOptions": {},
          "postcssOptions": {},
          "rendererOptions": {}
        }
      }      
    ]     
    ```

- install effector dependencies: `npm i effector effector-react use-sync-external-store`

- use `rollup-plugin-commonjs-alternate` with rollup config


## How to use: 

### Step 1: initialize

#### via degit:

```sh
degit Sanshain/preact-boilerplate#js_hmr_html
```

#### via git: 

```sh
git clone Sanshain/preact-boilerplate#js_hmr_html && rm -r .get && git init
```

### Step 2: install

#### via pnpm: 

```sh
pnpm i
```

#### via npm: 

#### step 1: to install `github:Sanshain/rollup-plugin-postcss-hot#dev`:
```sh
npm config set strict-ssl false  
```

#### step 2: to install all packages:
```sh
npm i --verbose
```




### Packages destinations collected by its features in the template: 

## JSX compilation: 

- `@rollup/plugin-babel`
- `@babel/core`
- `@babel/plugin-transform-react-jsx`

## HMR:

- `@prefresh/nollup`
- `@prefresh/babel-plugin` ([recomended for hooks](https://github.com/Sanshain/prefresh/tree/main/packages/nollup#using-hooks))
- `nollup`
- `react-refresh`
- `rollup-plugin-postcss-hot` (hot reloading for css)

## CSS modules: 

- `rollup-plugin-postcss-hot`


## Code building (it's default): 

- `rollup`
- `@rollup/plugin-node-resolve`

## Preparing to production: 

- `rollup-plugin-static-files` (just copies static files to production dist - unneccessary)
- `rollup-plugin-terser` (minifier)


### Troubles: 

- **Uncaught ReferenceError: $RefreshReg$ is not defined** - prefresh plugin is not included plugin to rollup config whereas `"@prefresh/babel-plugin"` is on.
- **Cannot use 'import.meta' outside a module** - use patched version of `rollup-plugin-postcss-hot` from [there](https://github.com/Sanshain/rollup-plugin-postcss-hot).