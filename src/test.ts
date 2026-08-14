import getOwnEnumerablePropertySymbols from '.'
import { strictEqual } from 'assert'

const enumKey = Symbol('for enumerable')
const nonEnumKey = Symbol('for non-enumerable')

const object = {
  [enumKey]: undefined
}

Object.defineProperty(object, nonEnumKey, { enumerable: false })

const actual = getOwnEnumerablePropertySymbols(object)
strictEqual(Array.isArray(actual), true)
strictEqual(actual.length, 1)
strictEqual(actual[0], enumKey)
