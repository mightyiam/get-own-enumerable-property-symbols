import * as assert from 'assert'
import getOwnEnumerablePropertySymbols from '.'

const enumKey = Symbol('for enumerable')
const nonEnumKey = Symbol('for non-enumerable')

const object = {
  [enumKey]: undefined
}

Object.defineProperty(object, nonEnumKey, { enumerable: false })

const actual = getOwnEnumerablePropertySymbols(object)
assert.ok(Array.isArray(actual))
assert.strictEqual(actual.length, 1)
assert.strictEqual(actual[0], enumKey)
