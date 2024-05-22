#### Has been get started with: 

```sh
npm init nollup-app -- --name preact-app --template preact
```

### Cheat sheets, how to install from a scratch:


- Installing the fixed package @prefresh/nollup (created due [this service](https://gitpkg.vercel.app/about)):

    ```sh
    npm install 'https://gitpkg.now.sh/Sanshain/prefresh/packages/nollup?main' -D
    ```

## How to use: 

#### via degit:

```sh
degit Sanshain/preact-boilerplate#js_hmr_html
```

#### via git: 

```sh
git clone Sanshain/preact-boilerplate#js_hmr_html && rm -r .get && git init
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
- `rollup-plugin-hot-css` (hot reloading for css)


## Code building (it's default): 

- `@rollup/plugin-node-resolve`

## Production compilation: 

- `rollup`
- `rollup-plugin-static-files` (just copies static files to production dist - unneccessary)
- `rollup-plugin-terser` (minifier)
