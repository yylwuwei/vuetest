// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // yyl add: close semi check on the end
    'semi': [0],
    // yyl add: empty lines is allowed
    "no-multiple-empty-lines": [0,{"max": 5}],
    // yyl add: no unused vars
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}]
}
}
