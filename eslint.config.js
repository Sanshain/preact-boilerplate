//@ts-check

import { Linter } from "eslint";
import globals from 'globals';
import { fixupPluginRules } from "@eslint/compat";

import jsdoc from 'eslint-plugin-jsdoc';
import jsdocconfig from "./.eslint/jsdoc.config.js";

// import jsdoc from "eslint-plugin-jsdoc";
// import eslintConfigPrettier from "eslint-config-prettier";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";

import eslint from "@eslint/js";

// import jsdoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import { configs as importsconfig } from 'eslint-plugin-import';
// import importsplugin from 'eslint-plugin-import';                                // <= breaks vscode's intellisence



const reactplugin = /** @type {import('eslint').ESLint.Plugin} */ (react);
const hooks = /** @type {import('eslint').ESLint.Plugin} */ (reactHooks);


/**
 * @type {Linter.Config[]} - w/o tslint support
 */
// ---
/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} (https://github.com/typescript-eslint/typescript-eslint/issues/8211) */
const config = [
    // configuration included in plugin

    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        }
    },
    
    /**
     * @description https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#helpful-warnings
    */
   // importsconfig.recommended,
   // importsconfig.typescript,

   // reactplugin.configs?.flat['recommended'],
   // hooks.configs['flat/recommended'],

    /**
     * @desc check jsdocs for all files matched cli pattern:
     */
    // jsdoc.configs['flat/recommended'],
    /**
     * @desc check jsdocs just for *.js files:
     */
    jsdocconfig,

    
    ...tseslint.configs.recommended,    
    
    // other configuration objects...
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            /**
             * @link https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
            */
            react: /** @type {import('eslint').ESLint.Plugin} */ (react),
            /**
             * @ceveats https://stackoverflow.com/questions/76183413/integration-of-eslint-plugin-react-hooks-recommended-with-eslint-config-js
             */
            'react-hooks': hooks,
            
            // '@typescript-eslint': tseslint.plugin       // IF SET AS IS -> CANN'T PARSE TSX FILES (BUT FOR PURE TS IS OK)
            // ...tseslint.configs.recommended,            // DOESN'T WORK AT ALL 
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            /** @description Disallow React to be incorrectly marked as unused */ 'react/jsx-uses-react': 'warn',
            /** @description Disallow variables used in JSX to be incorrectly marked as unused */ 'react/jsx-uses-vars': 'warn',

            "react-hooks/rules-of-hooks": "warn",   /// https://react.dev/reference/rules/rules-of-hooks
            "react-hooks/exhaustive-deps": "warn",   /// https://bobbyhadz.com/blog/react-hooks-exhaustive-deps#understanding-the-exhaustive-deps-eslint-rule-in-react

            "@typescript-eslint/no-unused-vars": "warn"
        },
        ignores: [
            "node_modules/"            
        ]
    },        

    // ...tseslint.config(
    //     eslint.configs.recommended,
    //     ...tseslint.configs.recommended,
    // )
];

export default config;

// export default config;


// https://habr.com/ru/articles/819847/
// https://dev.to/logrocket/12-essential-eslint-rules-for-react-5doc

/// Use it to disable error checking:

// eslint-disable-next-line react-hooks/exhaustive-deps
