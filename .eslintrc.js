const configs = require('@design-system/eslint-config')

module.exports = {
  ...configs,
  root: true,
  rules: {
    ...configs.rules,
    'import-helpers/order-imports': [
      configs.rules['import-helpers/order-imports'][0],
      {
        ...configs.rules['import-helpers/order-imports'][1],
        groups: [
          '/^react/',
          '/^redux/',
          '/^lodash/',
          'module',
          '/^@design-system/',
          '/^@business/',
          ['parent', 'sibling', 'index']
        ]
      }
    ]
  }
}
