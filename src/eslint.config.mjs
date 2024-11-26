import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default async function eslintPreset (configs = [], opts = {}){
  const config = await createConfigForNuxt({
    ...opts,
  }, ...pluginVueA11y.configs['flat/recommended'], {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-mixed-operators': [
        'error',
        {
          groups: [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        },
      ],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
          multiline: true, consistent: true, minProperties: 3,
        },
        ObjectPattern: {
          multiline: true, consistent: true, minProperties: 3,
        },
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@typescript-eslint/no-empty-object-type': ['error', {
        allowInterfaces: 'with-single-extends',
      }],
      'camelcase': ['error', {
        'ignoreDestructuring': true,
        'properties': 'never',
        'allow': ['client', 'mark', 'except', 'category_enum', 'external', 'owners_id', 'utm_'], //gql
      }],
      'constructor-super': 'off',
      'import/extensions': ['error', {
        'js': 'never',
        'ts': 'never',
        'vue': 'always',
        'config': 'always',
      }],
      'import/no-unresolved': 0,
      // !! fix this shit !!
      'import/prefer-default-export': 'off',
      // !!
      'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
      'no-bitwise': ['error', {allow: ['~']}],
      'no-debugger': 'error',
      'no-multi-assign': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-return-await': 'off',
      'no-undef': 0,
      'no-unused-expressions': 'warn',
      // 'no-console': 'error',
      'no-unused-vars': 'off',
      // 'arrow-parens': ['error', 'as-needed'],
      'prefer-destructuring': ['error', {
        array: true,
        object: true,
      }, {
        enforceForRenamedProperties: false,
      },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],
      'vue/enforce-style-attribute': [
        'error',
        {'allow': ['module']},
      ], //deprecated
      'vue/html-button-has-type': 'error',
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
        },
      ],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/match-component-file-name': ['error', {
        extensions: ['vue'],
        shouldMatchCase: false,
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/max-len': ['error', {code: 120, ignoreHTMLAttributeValues: true, ignorePattern: 'href=|src='}],
      'vue/multi-word-component-names': 0,
      // off cuz deprecated onna current version of vue
      'vue/no-dupe-keys': ['error', {
        groups: [],
      }],
      'vue/no-irregular-whitespace': ['error', {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false,
      }],
      'vue/no-multiple-template-root': 'off',
      // 'no-unused-locals': ['error', {argsIgnorePattern: '^_'}],
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/order-in-components': ['error', {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      }],
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/media-has-caption': 0,
      'vuejs-accessibility/tabindex-no-positive': 0,
    },
  })
    .append(...configs)
    .toConfigs();

  return config;
}