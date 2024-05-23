#### Has been get started with: 

```sh
npm init nollup-app -- --name preact-app --template preact
```

### Cheat sheets, how to install from a scratch:


- Installing the fixed package @prefresh/nollup (created due [this service](https://gitpkg.vercel.app/about)):

    ```sh
    npm install 'https://gitpkg.now.sh/Sanshain/prefresh/packages/nollup?main' -D
    ```

- If you want change hmr directory or sample of link in a hmr template, note how it works: variable `hmrNaming` consists of fields specifiing how links to resources should look like in html template of hot module reloading work. So you can set it as below:

    ```js
    const hmrNaming = inDevelopment && {
        assetFileNames: '[name].[extname]',
    } 
    ```
    and to keep working hmr after the changes you also have to change the html template itself (the html template located on the path or within directory mentioned in a field `contentBase` of exporting object at file `.nollup.js`) as follows:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preact App</title>
        <link rel="stylesheet" href="/styles.css" type="text/css">
    </head>
    <body>
        <div id="app"></div>
        <script async src="/main.js"></script>
    </body>
    </html>
    ```
    Within `.nollup.js` you might also change hmr template location.

    By default in the boilerplate `hmrNamig` on hmr contains object with hash part as below
    ```js
    const hmrNaming = inDevelopment && {
        entryFileNames: `[name].[hash].js`,
        assetFileNames: '[name].[hash][extname]',      
    }         
    ```
    to emphasize that in production final html will have hash in resources names, but the object won't have effect directly on final html generation (inline plugin will take over all the work). But indirectly it will, because inline plugin copies hmr template to production directory with appropriate hash patterns replacements, and hmr template is directly linked with the names.

    You might set subdirectory for final html compilation here as well: 

    ```js
    const subDir = 'assert'

    const hmrNaming = inDevelopment && {
        entryFileNames: `${subDir}/[name].[hash].js`,
        assetFileNames: `${subDir}/[name].[hash][extname]`,
    }
    /// ...

        !inDevelopment && inline({                                      // html.hash
            template: `./${hmrDir}/index.html`,
            resourcesDirectory: subDir + '/',
            hash: true,
        }),    
    ```

    and 

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preact App</title>
        <link rel="stylesheet" href="assert/styles.[hash]css" type="text/css">
    </head>
    <body>
        <div id="app"></div>
        <script async src="assert/main.[hash]js"></script>
    </body>
    </html>    
    ```

    Note that if the project contains anothe resources (like images) you might need in use `rollup-plugin-static-files` to copy the resources to production directory (does not tested yet. At the moment the plugin is absent in the boilerplate (look up history) )

## How to use: 

#### via degit:

```sh
degit Sanshain/preact-boilerplate#js_hmr_html
```

#### via git: 

```sh
git clone Sanshain/preact-boilerplate#js_hmr_html && rm -r .get && git init
```


## Packages destinations collected by its features in the template: 

### JSX compilation: 

- `@rollup/plugin-babel`
- `@babel/core`
- `@babel/plugin-transform-react-jsx`

### HMR:

- `@prefresh/nollup`
- `@prefresh/babel-plugin` ([recomended for hooks](https://github.com/Sanshain/prefresh/tree/main/packages/nollup#using-hooks))
- `nollup`
- `react-refresh`
- `rollup-plugin-hot-css` (hot reloading for css)


### Code building (it's default): 

- `@rollup/plugin-node-resolve`

### Production compilation: 

- `rollup`
- `rollup-plugin-static-files` (just copies static files to production dist - unneccessary)
- `rollup-plugin-terser` (minifier)

### HTML generation:

- `rollup-plugin-html-inline` - inject hashed file names to final html page


## Possible hmr errors and workarounds: 

- **error 404 when loading one of the resources** - check correctness of links in hmr template and its correlation with `hmrNaming` withon wolup config. After a fix restart dev server
- **Cannot GET /** - error 404 on html loading - check `.nolluprc.js`: correctness `contentBase` field and existing of appropriate directory with appropriate html file

