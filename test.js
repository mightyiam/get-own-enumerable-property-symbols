const assert = require('assert')
const getOwnEnumerablePropertySymbols = require('.')

const enumKey = Symbol()
const nonEnumKey = Symbol()

const object = {
  [enumKey]: undefined
}

Object.defineProperty(object, nonEnumKey, {enumerable: false})

assert.deepEqual(getOwnEnumerablePropertySymbols(object), [enumKey])
