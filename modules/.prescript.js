//@ts-check

import fs from "fs";
import path from "path";


replace([
    '@reatom/npm-react',
    '@reatom/core',
    // '@reatom/lens',
    '@reatom/hooks',
    '@reatom/primitives',
]);

/**
 * @param {string[]} paths
 */
function replace(paths) {

    for (var _path of paths) {

        const originCode = fs.readFileSync(`../node_modules/${_path}/build/index.mjs`.slice(1)).toString();

        const fixedCode = originCode
            .replace(/([\w\.]+) ?\?\?=/g, '$1 = $1 ??')
            .replace(/([\w\.]+) ?\|\|=/g, '$1 = $1 ||')

        fs.writeFileSync(path.join('modules', `./${_path}.js`), fixedCode);   

        console.log(`\x1b[36m✓\x1b[0m - ${_path}`)
    }    
}


