//@ts-check

import eslint from "@eslint/js";
import { Linter } from "eslint";
import jsdoc from 'eslint-plugin-jsdoc';

/**
 * type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config}
 * @type {Linter.Config}
 */
export default {
    files: ['**/*.js'],
    plugins: {
        jsdoc,
    },
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    rules: {

        /**
         * @description default rules (may be unnecessarily)
        */
        ...eslint.configs.recommended.rules,
        "no-unused-vars": "warn",

        ...jsdoc.configs["flat/recommended"].rules,
        // 'jsdoc/require-description': 'warn',
        'jsdoc/require-description': 'off',

        // https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
        // 'react/jsx-uses-react': 'warn',
        // 'react/jsx-uses-vars': 'warn',
    },
    ignores: [
        "node_modules/"
    ],
    settings: {
        "import/resolver": {
            // You will also need to install and configure the TypeScript resolver
            // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
            // typescript: true,
            // node: true,
            node: {
                "extensions": [
                    ".js",
                    // ".jsx"
                ]
            },
            // "import/parsers": {
            //     "@typescript-eslint/parser": [".ts", ".tsx"],
            // },                
        },
    }
};