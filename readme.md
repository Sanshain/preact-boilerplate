# preact-rollup bolilerplate

- typescript
- css modules 
- reatom
- **35kb** - built via esbuilt (reatom - 8kb, 15kb - compat, 13kb - preact+hooks)

## Features: 

- [x] rollup builder as the best production builder (2.8ms cold build)
- [x] preact as more optimal analogous to react library (12 kb - template minified size)
- [x] live reloading (450ms reloading)
- [ ] xi-store as embed workspace
- [x] jsx via babel (yes, still via this one)
- [x] css modules via `rollup-plugin-postcss` plugin for builder and `typescript-plugin-css-modules` for typescript (isolates styles instead of `react-css-modules`) (sometimes gets some error of import in terminal, but applies fine. Just ignore it)
- [ ] goober instead of styled components: Usage styled components via [`goober`](https://www.npmjs.com/package/goober) redices runtime (look [`App.jsx`](https://github.com/Sanshain/preact-boilerplate/blob/main/source/App.jsx)) to few kbs, but with state supports as opposed to css modules
- [ ] `preact-routers` out of the box
- [x] tuned tsconfig out of the box

### TODO:

- prerender out of the box

### Ver Info:

- Created on Preact 10.* + Rollup 4.* + Babel 7 template for SPAs.


## Requires for CSS modules feature:

#### Plugins for VSCode:

- `CSS Modules`
- `Path Autocomplete`
- `typescript-plugin-css-modules` (installed via npm and settled with `tsconfig.json`)

#### Plugins for rollup: 

- `rollup-plugin-postcss`

### plugins for tsconfig: 

- `typescript-plugin-css-modules`

## Setup

1. Clone the repo
```sh
git clone https://github.com/Sanshain/preact-boilerplate.git && cd project-templates
```

2. Install the deps
```sh
npm i
```

3. Compile
```sh
rollup -c
```


## Prerender (SSR) usage:

- Change `options.prerender` to `true` 
- Apply `rollup -c` => will created init.js inside `realese` folder
- apply `node init` => will created `prerender.html` in the same folder


## CLI

### `npm start`

Launch a dev server at `localhost:3000` and reload on file changes.

### `npm run build`

Build a production bundle in `release` folder.

### `npm run serve`

Serve production assets on localhost.

