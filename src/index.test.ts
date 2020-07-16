import test from 'ava'
import getOwnEnumerablePropertySymbols from '.'

test('everything', (t) => {
  const enumKey = Symbol('for enumerable')
  const nonEnumKey = Symbol('for non-enumerable')

  const object = {
    [enumKey]: undefined
  }

  Object.defineProperty(object, nonEnumKey, { enumerable: false })

  const actual = getOwnEnumerablePropertySymbols(object)
  t.true(Array.isArray(actual))
  t.is(actual.length, 1)
  t.is(actual[0], enumKey)
})
