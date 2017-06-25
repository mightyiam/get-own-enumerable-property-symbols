const assert = require('assert')
const getOwnEnumerablePropertySymbols = require('.').default

const enumKey = Symbol('for enumerable')
const nonEnumKey = Symbol('for non-enumerable')

const object = {
  [enumKey]: undefined
}

Object.defineProperty(object, nonEnumKey, {enumerable: false})

assert.deepEqual(getOwnEnumerablePropertySymbols(object), [enumKey])
