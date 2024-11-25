import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default async function riAdvancePreset (){
  const config = await createConfigForNuxt({
  }, ...pluginVueA11y.configs['flat/recommended'], {
    rules: {
      'import/no-unresolved': 0,
      'import/extensions': 0,
      indent: ['error', 2],
      'linebreak-style': 0,
      'vue/multi-word-component-names': 0,
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'vuejs-accessibility/media-has-caption': 0,
      'no-undef': 0,
      // !! fix this shit !!
      'vuejs-accessibility/tabindex-no-positive': 0,
      // !!
      'object-curly-spacing': ['error', 'always'],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
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
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
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
      'vue/no-irregular-whitespace': ['error', {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false,
      }],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/match-component-file-name': ['error', {
        extensions: ['vue'],
        shouldMatchCase: false,
      }],
      'vue/no-dupe-keys': ['error', {
        groups: [],
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],
      'comma-dangle': ['error', 'always-multiline'],
      // 'no-console': 'error',
      'no-debugger': 'error',
      // 'arrow-parens': ['error', 'as-needed'],
      'no-plusplus': 'off',
      'constructor-super': 'off',
      'vue/no-v-model-argument': 'off',
      'no-mixed-operators': [
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
      'import/prefer-default-export': 'off',
      'no-return-await': 'off', //deprecated
      'no-unused-expressions': 'warn',
      'no-param-reassign': 'off',
      'no-multi-assign': 'off',
      'prefer-destructuring': ['error', {
        array: true,
        object: true,
      }, {
        enforceForRenamedProperties: false,
      },
      ],
      'camelcase': ['error', {
        'ignoreDestructuring': true,
        'properties': 'never',
        'allow': ['client', 'mark', 'except', 'category_enum', 'external', 'owners_id', 'utm_'], //gql
      }],
      'vue/no-multiple-template-root': 'off',
      'vue/html-button-has-type': 'error',
      // off cuz deprecated onna current version of vue
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-html': 'off',
      'no-bitwise': ['error', { allow: ['~'] }],
      // 'no-unused-locals': ['error', {argsIgnorePattern: '^_'}],
      'no-unused-vars': 'off',
      'max-len': ['error', { code: 120, ignorePattern: 'href=|src=' }],
      'vue/max-len': ['error', { code: 120, ignoreHTMLAttributeValues: true }],
      'object-curly-newline': ['error', {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      }],
      'vuejs-accessibility/form-control-has-label': 'off',
      'vue/enforce-style-attribute': [
        'error',
        { 'allow': ['module'] },
      ],
      '@typescript-eslint/no-empty-object-type': ['error', {
        allowInterfaces: 'with-single-extends',
      }],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'vue/component-api-style': ['error', ['script-setup']],
    },
  }).toConfigs();

  return config;
}