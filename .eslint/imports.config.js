//@ts-check

import { Linter } from "eslint";

//@ts-expect-error
import * as tsparser from "@typescript-eslint/parser";
//@ts-expect-error - https://github.com/import-js/eslint-plugin-import/issues/3090
import importplugin from 'eslint-plugin-import';
// import importsplugin from 'eslint-plugin-import';                // <= w/o ts-expect-error breaks vscode's intellisence at all
// import { configs as importsconfig } from 'eslint-plugin-import'; // doesn't work as plugin - just as rules, but w/o plugin its useless






/**
 * type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config}
 * @type {Linter.Config}
 */
export default {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
        import: importplugin,
    },
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        parser: tsparser
    },
    rules: {
        // 'import/no-dynamic-require': 'warn',
        'import/no-duplicates': 'warn'
    },
    ignores: [
        "node_modules/"
    ],
    settings: {
        "import/resolver": {
            // You will also need to install and configure the TypeScript resolver
            // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
            typescript: true,
            // node: true,
            node: {
                "extensions": [
                    ".js",
                    // ".jsx"
                ]
            },

            // /// warning  Resolve error: unable to load resolver "import/parsers"  import/no-duplicates:
            // "import/parsers": {
            //     /// https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#importparsers
            //     "@typescript-eslint/parser": [".ts", ".tsx"],
            // },
        },
    }
};