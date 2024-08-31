# preact-rollup bolilerplate



## Features: 

- [x] rollup builder as the best production builder
- [x] preact as more optimal analogous to react library
- [x] live reloading 
- [ ] xi-store as embed workspace
- [x] jsx via babel (yes, still via this one)
- [x] css modules via `rollup-plugin-postcss` plugin for builder and `typescript-plugin-css-modules` for typescript (isolates styles instead of `react-css-modules`)
- [ ] goober instead of styled components: Usage styled components via [`goober`](https://www.npmjs.com/package/goober) redices runtime (look [`App.jsx`](https://github.com/Sanshain/preact-boilerplate/blob/main/source/App.jsx)) to few kbs, but with state supports as opposed to css modules
- [x] `preact-routers` out of the box
- [x] tuned tsconfig out of the box

### TODO:

- prerender out of the box

### Ver Info:

- Created on Preact 10.* + Rollup 4.* + Babel 7 template for SPAs.

### Required plugins for VSCode: 

- CSS Modules


### Known problems

- **type errors on css modules imports** (*cann't find module or types declaration or somethin like this*): 
    - Be sure you use at least 5.4.5 typescript version or - if you cann't - try to play with another versions
    - Check `typescript-plugin-css-modules` settings in your tsconfig according plugin's documentation
    - try to add following option in your `.vscode/settings.json`:
        ```json
        "typescript.tsserver.pluginPaths": [
            "typescript-plugin-css-modules"
        ]       
        ```
    - after all of that don't forget to restart your typescript server (if it's vscode - via combination `ctrl+shift+p`)


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

### `npm run dev` ~~`npm start`~~ 

Launch a dev server at `localhost:3000` and reload on file changes.

### `npm run build`

Build a production bundle in `release` folder.

### ~~`npm run serve`~~

~~Serve production assets on localhost.~~

