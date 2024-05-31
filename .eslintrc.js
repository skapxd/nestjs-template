module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'etc',
    'unused-imports',
    'simple-import-sort',
    "@darraghor/nestjs-typed"
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:@darraghor/nestjs-typed/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn',
    'etc/no-commented-out-code': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    "@darraghor/nestjs-typed/controllers-should-supply-api-tags": "off",
    "@darraghor/nestjs-typed/api-method-should-specify-api-response": "off",
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    'no-empty': 'error',
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      'files': [
        '*.spec.ts'
      ],
      'rules': {
        '@typescript-eslint/ban-ts-comment': 'off'
      }
    }
  ]
};
