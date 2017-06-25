export default (object: object) => Object
  .getOwnPropertySymbols(object)
  .filter(keySymbol => object.propertyIsEnumerable(keySymbol))
