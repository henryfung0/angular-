import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import angularPlugin from '@angular-eslint/eslint-plugin';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';

export default [
  js.configs.recommended,
  {
    ignores: ['projects/**/*']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ]
    }
  },
  {    files: ['**/*.html'],    languageOptions: {      parser: angularTemplateParser,      parserOptions: {        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],        ecmaVersion: 'latest',        sourceType: 'module'      }    },    plugins: {      '@angular-eslint/template': angularTemplatePlugin    },    rules: {      ...angularTemplatePlugin.configs.recommended.rules    }  },
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      globals: {
        describe: true,
        beforeEach: true,
        it: true,
        expect: true
      }
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        console: true,
        process: true
      }
    }
  }
];