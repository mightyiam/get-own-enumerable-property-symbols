module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'commitlint',
      'dependabot',
      'package',
      'docs',
      'deps'
    ]]
  }
}
