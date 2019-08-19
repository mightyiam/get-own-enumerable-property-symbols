export default (object: object): symbol[] => Object
  .getOwnPropertySymbols(object)
  .filter((keySymbol): boolean => Object.prototype.propertyIsEnumerable.call(object, keySymbol))
