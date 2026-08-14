import getOwnEnumerablePropertySymbols from '.'
import assert from 'assert'

const enumKey = Symbol('for enumerable')
const nonEnumKey = Symbol('for non-enumerable')

const object = {
  [enumKey]: undefined
}

Object.defineProperty(object, nonEnumKey, { enumerable: false })

const actual = getOwnEnumerablePropertySymbols(object)
assert.strictEqual(Array.isArray(actual), true)
assert.strictEqual(actual.length, 1)
assert.strictEqual(actual[0], enumKey)
